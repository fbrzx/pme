import React from 'react';

export interface JoinProps extends React.HTMLAttributes<HTMLDivElement> {
    vertical?: boolean;
    horizontal?: boolean;
}

export const Join = React.forwardRef<HTMLDivElement, JoinProps>(
    ({ className = '', vertical, horizontal, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`join ${vertical ? 'join-vertical' : ''} ${horizontal ? 'join-horizontal' : ''} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Join.displayName = 'Join';
