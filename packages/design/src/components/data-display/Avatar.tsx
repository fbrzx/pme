import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    placeholder?: string;
    status?: 'online' | 'offline';
    shape?: 'circle' | 'square' | 'squircle' | 'hexagon';
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
    ({ className = '', src, alt, placeholder, status, shape, size, children, ...props }, ref) => {
        const sizeClasses = {
            xs: 'w-8',
            sm: 'w-12',
            md: 'w-24',
            lg: 'w-32',
        };

        const maskClasses = {
            circle: 'rounded-full',
            square: 'rounded-none',
            squircle: 'mask mask-squircle',
            hexagon: 'mask mask-hexagon',
        };

        return (
            <div ref={ref} className={`avatar ${status ? status : ''} ${placeholder ? 'placeholder' : ''} ${className}`} {...props}>
                <div className={`${sizeClasses[size || 'md']} ${maskClasses[shape || 'circle']}`}>
                    {src ? <img src={src} alt={alt} /> : <span className="text-xl">{placeholder || children}</span>}
                </div>
            </div>
        );
    }
);
Avatar.displayName = 'Avatar';
