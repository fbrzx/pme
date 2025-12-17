import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' | 'info' | 'success' | 'warning' | 'error';
    size?: 'lg' | 'md' | 'sm' | 'xs';
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className = '', variant = 'neutral', size = 'md', children, ...props }, ref) => {
        const variantClasses: Record<string, string> = {
            neutral: 'badge-neutral',
            primary: 'badge-primary',
            secondary: 'badge-secondary',
            accent: 'badge-accent',
            ghost: 'badge-ghost',
            outline: 'badge-outline',
            info: 'badge-info',
            success: 'badge-success',
            warning: 'badge-warning',
            error: 'badge-error',
        };

        const sizeClasses: Record<string, string> = {
            lg: 'badge-lg',
            md: 'badge-md',
            sm: 'badge-sm',
            xs: 'badge-xs',
        };

        return (
            <div
                ref={ref}
                className={`badge ${variantClasses[variant] || 'badge-neutral'} ${sizeClasses[size] || 'badge-md'} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Badge.displayName = 'Badge';
