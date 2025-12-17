import React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    horizontal?: 'start' | 'center' | 'end';
    vertical?: 'top' | 'middle' | 'bottom';
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
    ({ className = '', horizontal = 'end', vertical = 'bottom', children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`toast toast-${horizontal} toast-${vertical} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Toast.displayName = 'Toast';
