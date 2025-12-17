import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    horizontal?: boolean;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
    ({ className = '', horizontal = false, children, ...props }, ref) => (
        <div ref={ref} className={`divider ${horizontal ? 'divider-horizontal' : ''} ${className}`} {...props}>{children}</div>
    )
);
Divider.displayName = 'Divider';
