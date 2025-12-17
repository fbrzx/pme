import React from 'react';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    size?: 'lg' | 'md' | 'sm' | 'xs';
    error?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className = '', variant = 'bordered', size = 'md', error, children, ...props }, ref) => {
        const variantClasses: Record<string, string> = {
            bordered: 'select-bordered',
            ghost: 'select-ghost',
            primary: 'select-bordered select-primary',
            secondary: 'select-bordered select-secondary',
            accent: 'select-bordered select-accent',
            info: 'select-bordered select-info',
            success: 'select-bordered select-success',
            warning: 'select-bordered select-warning',
            error: 'select-bordered select-error',
        };

        const sizeClasses: Record<string, string> = {
            lg: 'select-lg',
            md: 'select-md',
            sm: 'select-sm',
            xs: 'select-xs',
        };

        return (
            <select
                ref={ref}
                className={`select ${variantClasses[variant] || 'select-bordered'} ${sizeClasses[size] || 'select-md'} ${error ? 'select-error' : ''} ${className}`}
                {...props}
            >
                {children}
            </select>
        );
    }
);

Select.displayName = 'Select';
