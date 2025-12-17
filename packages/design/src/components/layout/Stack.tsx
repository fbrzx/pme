import React from 'react';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
    ({ className = '', children, ...props }, ref) => {
        return (
            <div ref={ref} className={`stack ${className}`} {...props}>
                {children}
            </div>
        );
    }
);
Stack.displayName = 'Stack';
