import React from 'react';

export interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: 'bordered' | 'ghost' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
    ({ className = '', variant = 'bordered', size = 'md', ...props }, ref) => {
        const variantClasses: Record<string, string> = {
            bordered: 'file-input-bordered',
            ghost: 'file-input-ghost',
            primary: 'file-input-bordered file-input-primary',
            secondary: 'file-input-bordered file-input-secondary',
            accent: 'file-input-bordered file-input-accent',
            info: 'file-input-bordered file-input-info',
            success: 'file-input-bordered file-input-success',
            warning: 'file-input-bordered file-input-warning',
            error: 'file-input-bordered file-input-error',
        };

        const sizeClasses: Record<string, string> = {
            xs: 'file-input-xs',
            sm: 'file-input-sm',
            md: 'file-input-md',
            lg: 'file-input-lg',
        };

        return (
            <input
                type="file"
                ref={ref}
                className={`file-input ${variantClasses[variant] || 'file-input-bordered'} ${sizeClasses[size]} ${className}`}
                {...props}
            />
        );
    }
);
FileInput.displayName = 'FileInput';
