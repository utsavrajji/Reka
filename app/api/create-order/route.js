import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { amount, customerName, customerEmail, customerPhone } = await request.json();

        if (!amount) {
            throw new Error("Amount is required");
        }

        const isProduction = process.env.NEXT_PUBLIC_CASHFREE_MODE === 'PRODUCTION';
        const baseUrl = isProduction
            ? "https://api.cashfree.com/pg/orders"
            : "https://sandbox.cashfree.com/pg/orders";

        const appId = process.env.CASHFREE_APP_ID;
        const secretKey = process.env.CASHFREE_SECRET_KEY;

        console.log("-----------------------------------------");
        console.log("Cashfree API (Direct Fetch) Credentials:");
        console.log("App ID:", appId ? "***" + appId.slice(-4) : "MISSING");
        console.log("Secret Key:", secretKey ? "***" + secretKey.slice(-4) : "MISSING");
        console.log("Mode:", isProduction ? "PRODUCTION" : "SANDBOX");
        console.log("URL:", baseUrl);
        console.log("-----------------------------------------");

        if (!appId || !secretKey) {
            throw new Error("Cashfree Credentials Missing");
        }

        const date = new Date();
        const orderId = `order_${date.getTime()}`;

        // Ensure customer ID is valid chars (alphanumeric, underscore, hyphen)
        const safeCustomerId = (customerEmail || `cust_${date.getTime()}`).replace(/[^a-zA-Z0-9_-]/g, '_');

        // Ensure phone is valid (10 digits)
        const safePhone = customerPhone && customerPhone.length >= 10 ? customerPhone : "9999999999";

        // Check if we are in production or local
        const protocol = request.url.startsWith('http://localhost') ? 'http' : 'https';
        const host = request.headers.get('host');
        // Cashfree requires HTTPS return_url in production environment.
        // If testing locally with production credentials, you might need ngrok or similar, 
        // OR just fake it to a valid https domain for the API call to succeed.

        let returnUrl = `${protocol}://${host}/payment-status?order_id=${orderId}`;

        if (isProduction && protocol === 'http') {
            // Force HTTPS if in production mode but detected HTTP (common in local dev or behind proxy)
            // Replace localhost with your production domain if possible, or use a placeholder
            // For now, we'll try to just upgrade protocol, but localhost doesn't support https usually without setup.
            // BETTER: Use the actual domain if known.
            returnUrl = `https://rekaresearch.com/payment-status?order_id=${orderId}`;
            console.log("Forcing HTTPS return_url for Production Mode on Local:", returnUrl);
        }

        const requestData = {
            order_amount: amount,
            order_currency: "INR",
            order_id: orderId,
            customer_details: {
                customer_id: safeCustomerId.substring(0, 50),
                customer_name: customerName || "Guest User",
                customer_email: customerEmail || "guest@example.com",
                customer_phone: safePhone
            },
            order_meta: {
                return_url: returnUrl
            }
        };

        console.log("Sending Payload:", JSON.stringify(requestData, null, 2));

        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-version': '2023-08-01',
                'x-client-id': appId,
                'x-client-secret': secretKey
            },
            body: JSON.stringify(requestData)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Cashfree API Error:", data);
            return NextResponse.json(
                { error: data.message || "Cashfree API Error", details: data },
                { status: response.status }
            );
        }

        console.log("Cashfree Success:", data);
        return NextResponse.json(data);

    } catch (error) {
        console.error("General Error in API Route:", error);
        return NextResponse.json(
            {
                error: error.message || "Internal Server Error",
                details: error.toString()
            },
            { status: 500 }
        );
    }
}
