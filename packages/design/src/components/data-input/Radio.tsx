import React from 'react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error';
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ className = '', size = 'md', variant, ...props }, ref) => {
        const sizeClasses: Record<string, string> = {
            xs: 'radio-xs',
            sm: 'radio-sm',
            md: 'radio-md',
            lg: 'radio-lg',
        };

        return (
            <input
                type="radio"
                ref={ref}
                className={`radio ${sizeClasses[size]} ${variant ? `radio-${variant}` : ''} ${className}`}
                {...props}
            />
        );
    }
);
Radio.displayName = 'Radio';
