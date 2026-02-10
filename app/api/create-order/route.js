import { NextResponse } from 'next/server';
import { Cashfree } from "cashfree-pg";

export async function POST(request) {
    try {
        console.log("-----------------------------------------");
        console.log("Cashfree API Route hit credentials check:");
        console.log("App ID:", process.env.CASHFREE_APP_ID ? "***" + process.env.CASHFREE_APP_ID.slice(-4) : "MISSING");
        console.log("Secret Key:", process.env.CASHFREE_SECRET_KEY ? "***" + process.env.CASHFREE_SECRET_KEY.slice(-4) : "MISSING");
        console.log("Mode:", process.env.NEXT_PUBLIC_CASHFREE_MODE);
        console.log("-----------------------------------------");

        // Initialize Cashfree
        Cashfree.XClientId = process.env.CASHFREE_APP_ID;
        Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
        // Use string "PRODUCTION" if enum is undefined
        Cashfree.XEnvironment = Cashfree.Environment?.PRODUCTION || "PRODUCTION";

        const { amount, customerName, customerEmail, customerPhone } = await request.json();

        if (!amount) {
            throw new Error("Amount is required");
        }

        const date = new Date();
        const orderId = `order_${date.getTime()}`;

        // Ensure customer ID is valid chars (alphanumeric, underscore, hyphen)
        const safeCustomerId = (customerEmail || `cust_${date.getTime()}`).replace(/[^a-zA-Z0-9_-]/g, '_');

        // Ensure phone is valid (10 digits)
        const safePhone = customerPhone && customerPhone.length >= 10 ? customerPhone : "9999999999";

        const requestData = {
            order_amount: amount,
            order_currency: "INR",
            order_id: orderId,
            customer_details: {
                customer_id: safeCustomerId.substring(0, 50), // Limit length
                customer_name: customerName || "Guest User",
                customer_email: customerEmail || "guest@example.com",
                customer_phone: safePhone
            },
            order_meta: {
                return_url: `${new URL(request.url).origin}/payment-status?order_id=${orderId}`
            }
        };

        console.log("Creating Cashfree Order with data:", JSON.stringify(requestData, null, 2));

        try {
            const response = await Cashfree.PGCreateOrder("2023-08-01", requestData);
            console.log("Cashfree Response Success:", response.data);
            return NextResponse.json(response.data);
        } catch (apiError) {
            // Log detailed API error
            console.error("Cashfree API Call Failed:", apiError.message);
            if (apiError.response) {
                console.error("Response Status:", apiError.response.status);
                console.error("Response Data:", JSON.stringify(apiError.response.data, null, 2));
            }
            throw apiError; // Re-throw to be caught by outer catch
        }

    } catch (error) {
        console.error("General Error in API Route:", error);
        return NextResponse.json(
            {
                error: error.message || "Internal Server Error",
                details: error.response?.data || "No details available"
            },
            { status: 500 }
        );
    }
}
