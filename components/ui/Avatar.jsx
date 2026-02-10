import React from 'react';
import './Avatar.css';

export function Avatar({ className = '', children, ...props }) {
    return (
        <div className={`avatar ${className}`} {...props}>
            {children}
        </div>
    );
}

export function AvatarImage({ className = '', src, alt, ...props }) {
    return (
        <img
            src={src}
            alt={alt}
            className={`avatar-image ${className}`}
            {...props}
        />
    );
}

export function AvatarFallback({ className = '', children, ...props }) {
    return (
        <div className={`avatar-fallback ${className}`} {...props}>
            {children}
        </div>
    );
}
