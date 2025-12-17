import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link' | 'neutral' | 'outline';
    size?: 'lg' | 'md' | 'sm' | 'xs';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
        const variantClasses: Record<string, string> = {
            primary: 'btn-primary',
            secondary: 'btn-secondary',
            accent: 'btn-accent',
            ghost: 'btn-ghost',
            link: 'btn-link',
            neutral: 'btn-neutral',
            outline: 'btn-outline',
        };

        const sizeClasses: Record<string, string> = {
            lg: 'btn-lg',
            md: 'btn-md',
            sm: 'btn-sm',
            xs: 'btn-xs',
        };

        return (
            <button
                ref={ref}
                className={`btn ${variantClasses[variant] || 'btn-primary'} ${sizeClasses[size] || 'btn-md'} ${className}`}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
