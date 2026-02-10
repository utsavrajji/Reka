'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PaymentSuccess() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('order_id');
    const [status, setStatus] = useState('Checking...');

    // Optionally check status from your backend, but for now just show success
    // In production, verify the signature or call an API to confirm status
    useEffect(() => {
        if (orderId) {
            setStatus('Payment Successful!');
        } else {
            setStatus('Processing...');
        }
    }, [orderId]);

    return (
        <>
            <Navbar />
            <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#036A3A' }}>{status}</h1>
                    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
                        Thank you for your payment. Your order has been placed.
                        <br />
                        Order ID: <strong>{orderId || 'N/A'}</strong>
                    </p>
                    <a href="/" className="btn btn-primary btn-lg" style={{ display: 'inline-block', textDecoration: 'none' }}>
                        Back to Home
                    </a>
                </div>
            </main>
            <Footer />
        </>
    );
}
