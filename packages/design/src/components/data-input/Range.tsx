import React from 'react';

export interface RangeProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error';
}

export const Range = React.forwardRef<HTMLInputElement, RangeProps>(
    ({ className = '', size = 'md', variant, ...props }, ref) => {
        const sizeClasses: Record<string, string> = {
            xs: 'range-xs',
            sm: 'range-sm',
            md: 'range-md',
            lg: 'range-lg',
        };

        return (
            <input
                type="range"
                ref={ref}
                className={`range ${sizeClasses[size]} ${variant ? `range-${variant}` : ''} ${className}`}
                {...props}
            />
        );
    }
);
Range.displayName = 'Range';
