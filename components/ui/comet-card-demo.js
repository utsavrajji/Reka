"use client";
import { useState } from 'react';
import { CometCard } from "@/components/ui/comet-card";
import './comet-card-demo.css';

export default function CometCardDemo() {
    const [selectedFounder, setSelectedFounder] = useState(null);

    const founders = [
        {
            id: 'ceo',
            name: 'Abhinash Singh',
            title: 'CEO & Founder',
            profileImage: '/images/abhinash.jpg',
            bio: 'Abhinash Singh is a dynamic entrepreneur, sales leader, and growth strategist, leading Reka Creative Labs. With a background spanning finance, investment analysis, and sales leadership, Abhinash blends creativity with commercial strategy to deliver profitable outcomes.',
            experience: 'He has worked with leading organizations such as BYJU\'S, Testbook, and 1West, developing deep expertise in scaling businesses through disciplined execution.'
        },
        {
            id: 'cofounder',
            name: 'Utsav Raj',
            title: 'Co-Founder',
            profileImage: '/images/utsav.jpg',
            bio: 'Utsav Raj is the Co-Founder at Reka Creative Labs, focused on building innovative digital solutions and driving strategic growth. With a strong interest in technology, business development, and creative execution, Utsav plays a key role in shaping the company\'s vision and delivering impactful results for clients.',
            experience: 'He combines practical problem-solving with a growth-focused mindset, helping brands strengthen their digital presence through modern strategies and consistent execution. Known for his hands-on approach and entrepreneurial drive, Utsav is committed to scaling Reka Creative Labs into a trusted partner for businesses looking to grow in the digital space.'
        }
    ];

    const openModal = (founder) => {
        setSelectedFounder(founder);
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const closeModal = () => {
        setSelectedFounder(null);
        document.body.style.overflow = 'auto'; // Restore scroll
    };

    return (
        <div>
            <h2 className="comet-section-title">Founder & Growth Strategist</h2>
            <div className="comet-cards-container">
                {founders.map((founder) => (
                    <CometCard key={founder.id}>
                        <button
                            type="button"
                            className="comet-demo-button"
                            aria-label={`View details for ${founder.name}`}
                            onClick={() => openModal(founder)}
                        >
                            <div className="card-profile-section">
                                <img
                                    src={founder.profileImage}
                                    alt={founder.name}
                                    className="card-profile-image"
                                />
                            </div>
                            <div className="comet-demo-footer">
                                <div className="comet-demo-name">{founder.name}</div>
                                <div className="comet-demo-title">{founder.title}</div>
                            </div>
                        </button>
                    </CometCard>
                ))}
            </div>

            {/* Modal */}
            {selectedFounder && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                            ✕
                        </button>
                        <div className="modal-header">
                            <div className="modal-image-wrapper">
                                <img
                                    src={selectedFounder.profileImage}
                                    alt={selectedFounder.name}
                                    className="modal-image"
                                />
                            </div>
                            <div className="modal-title-section">
                                <h3 className="modal-name">{selectedFounder.name}</h3>
                                <p className="modal-title">{selectedFounder.title}</p>
                            </div>
                        </div>
                        <div className="modal-body">
                            <p className="modal-bio">{selectedFounder.bio}</p>
                            <p className="modal-experience">{selectedFounder.experience}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
