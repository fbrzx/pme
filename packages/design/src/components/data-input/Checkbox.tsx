import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error';
    size?: 'lg' | 'md' | 'sm' | 'xs';
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
        const variantClasses: Record<string, string> = {
            primary: 'checkbox-primary',
            secondary: 'checkbox-secondary',
            accent: 'checkbox-accent',
            success: 'checkbox-success',
            warning: 'checkbox-warning',
            info: 'checkbox-info',
            error: 'checkbox-error',
        };

        const sizeClasses: Record<string, string> = {
            lg: 'checkbox-lg',
            md: 'checkbox-md',
            sm: 'checkbox-sm',
            xs: 'checkbox-xs',
        };

        return (
            <input
                type="checkbox"
                ref={ref}
                className={`checkbox ${variantClasses[variant] || 'checkbox-primary'} ${sizeClasses[size] || 'checkbox-md'} ${className}`}
                {...props}
            />
        );
    }
);

Checkbox.displayName = 'Checkbox';
