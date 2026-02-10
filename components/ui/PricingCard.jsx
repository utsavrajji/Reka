import './PricingCard.css';

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

    return (
        <div className={`pricing-card ${featured ? 'featured' : ''}`}>
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

            <button className={`pricing-button ${buttonStyle}`}>
                {buttonText}
            </button>
        </div>
    );
}
