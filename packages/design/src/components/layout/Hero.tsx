import React from 'react';

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
    minHeight?: boolean; // min-h-screen
}

export const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
    ({ className = '', minHeight = false, children, ...props }, ref) => (
        <div ref={ref} className={`hero ${minHeight ? 'min-h-screen' : ''} bg-base-200 ${className}`} {...props}>{children}</div>
    )
);
Hero.displayName = 'Hero';

export const HeroContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', children, ...props }, ref) => (
        <div ref={ref} className={`hero-content ${className}`} {...props}>{children}</div>
    )
);
HeroContent.displayName = 'HeroContent';
