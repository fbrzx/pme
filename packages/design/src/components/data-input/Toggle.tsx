import React from 'react';

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error';
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
    ({ className = '', size = 'md', variant, ...props }, ref) => {
        const sizeClasses: Record<string, string> = {
            xs: 'toggle-xs',
            sm: 'toggle-sm',
            md: 'toggle-md',
            lg: 'toggle-lg',
        };

        return (
            <input
                type="checkbox"
                ref={ref}
                className={`toggle ${sizeClasses[size]} ${variant ? `toggle-${variant}` : ''} ${className}`}
                {...props}
            />
        );
    }
);
Toggle.displayName = 'Toggle';
