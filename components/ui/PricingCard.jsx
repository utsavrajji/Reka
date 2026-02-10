"use client";

import './PricingCard.css';
import { useState } from 'react';
import { load } from '@cashfreepayments/cashfree-js';

export default function PricingCard({ plan }) {
    const {
        name,
        price,
        description,
        features,
        buttonText,
        buttonStyle,
        featured
    } = plan;

    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const initializePayment = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Load Cashfree SDK
            const cashfree = await load({
                mode: "production" // or "sandbox"
            });

            // Parse amount (remove ₹ and ,)
            const amount = parseFloat(price.replace(/[₹,]/g, ''));

            // Create Order
            const response = await fetch('/api/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: amount,
                    customerName: userData.name,
                    customerEmail: userData.email,
                    customerPhone: userData.phone
                }),
            });

            const data = await response.json();

            if (data.payment_session_id) {
                // Open Checkout
                await cashfree.checkout({
                    paymentSessionId: data.payment_session_id,
                    returnUrl: `${window.location.origin}/payment-success`, // Create this page later if needed
                    redirectTarget: "_self" // or "_blank", "_top"
                });
            } else {
                alert('Failed to initiate payment. Please try again.');
            }

        } catch (error) {
            console.error("Payment error:", error);
            alert('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleButtonClick = () => {
        if (price === "Contact Us") {
            window.location.href = "/contact";
        } else {
            setShowForm(true);
        }
    };

    return (
        <div className={`pricing-card ${featured ? 'featured' : ''}`}>
            {!showForm ? (
                <>
                    <div className="pricing-header">
                        <h3 className="pricing-name">{name}</h3>
                        <div className="pricing-price">{price}</div>
                        <p className="pricing-description">{description}</p>
                    </div>

                    <div className="pricing-features">
                        <ul>
                            {features.map((feature, index) => (
                                <li key={index}>
                                    <svg
                                        className="feature-check"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        className={`pricing-button ${buttonStyle}`}
                        onClick={handleButtonClick}
                    >
                        {buttonText}
                    </button>
                </>
            ) : (
                <div className="payment-form-container" style={{ padding: '1rem' }}>
                    <h4 style={{ marginBottom: '1rem', color: '#036A3A' }}>Enter Details to Proceed</h4>
                    <form onSubmit={initializePayment} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={userData.name}
                            onChange={handleInputChange}
                            required
                            style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={userData.email}
                            onChange={handleInputChange}
                            required
                            style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={userData.phone}
                            onChange={handleInputChange}
                            required
                            style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                style={{ flex: 1, padding: '0.6rem', background: '#ccc', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                style={{ flex: 1, padding: '0.6rem', background: '#036A3A', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                            >
                                {loading ? 'Processing...' : 'Pay Now'}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
