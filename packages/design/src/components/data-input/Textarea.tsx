import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className = '', variant = 'bordered', size = 'md', error, ...props }, ref) => {
        const variantClasses: Record<string, string> = {
            bordered: 'textarea-bordered',
            ghost: 'textarea-ghost',
            primary: 'textarea-bordered textarea-primary',
            secondary: 'textarea-bordered textarea-secondary',
            accent: 'textarea-bordered textarea-accent',
            info: 'textarea-bordered textarea-info',
            success: 'textarea-bordered textarea-success',
            warning: 'textarea-bordered textarea-warning',
            error: 'textarea-bordered textarea-error',
        };

        const sizeClasses: Record<string, string> = {
            xs: 'textarea-xs',
            sm: 'textarea-sm',
            md: 'textarea-md',
            lg: 'textarea-lg',
        };

        return (
            <textarea
                ref={ref}
                className={`textarea ${variantClasses[variant] || 'textarea-bordered'} ${sizeClasses[size] || 'textarea-md'} ${error ? 'textarea-error' : ''} ${className}`}
                {...props}
            />
        );
    }
);
Textarea.displayName = 'Textarea';
