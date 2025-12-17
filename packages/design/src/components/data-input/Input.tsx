import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    size?: 'lg' | 'md' | 'sm' | 'xs';
    error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', variant = 'bordered', size = 'md', error, ...props }, ref) => {
        const variantClasses: Record<string, string> = {
            bordered: 'input-bordered',
            ghost: 'input-ghost',
            primary: 'input-bordered input-primary',
            secondary: 'input-bordered input-secondary',
            accent: 'input-bordered input-accent',
            info: 'input-bordered input-info',
            success: 'input-bordered input-success',
            warning: 'input-bordered input-warning',
            error: 'input-bordered input-error',
        };

        const sizeClasses: Record<string, string> = {
            lg: 'input-lg',
            md: 'input-md',
            sm: 'input-sm',
            xs: 'input-xs',
        };

        return (
            <input
                ref={ref}
                className={`input ${variantClasses[variant] || 'input-bordered'} ${sizeClasses[size] || 'input-md'} ${error ? 'input-error' : ''} ${className}`}
                {...props}
            />
        );
    }
);

Input.displayName = 'Input';
