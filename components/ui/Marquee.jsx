'use client';

import React, { useRef } from 'react';
import './Marquee.css';

export function Marquee({
    className = '',
    reverse = false,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ariaLabel,
    ariaLive = 'off',
    ariaRole = 'marquee',
    ...props
}) {
    const marqueeRef = useRef(null);

    return (
        <div
            {...props}
            ref={marqueeRef}
            data-slot="marquee"
            className={`marquee ${vertical ? 'marquee-vertical' : 'marquee-horizontal'} ${className}`}
            aria-label={ariaLabel}
            aria-live={ariaLive}
            role={ariaRole}
            tabIndex={0}
        >
            {Array.from({ length: repeat }, (_, i) => (
                <div
                    key={i}
                    className={`marquee-content ${vertical ? 'marquee-content-vertical' : 'marquee-content-horizontal'} ${pauseOnHover ? 'marquee-pause' : ''} ${reverse ? 'marquee-reverse' : ''}`}
                >
                    {children}
                </div>
            ))}
        </div>
    );
}
