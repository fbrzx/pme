import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    bordered?: boolean;
    compact?: boolean;
    imageFull?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', bordered = true, compact = false, imageFull = false, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`card bg-base-100 shadow-xl ${bordered ? 'card-bordered' : ''} ${compact ? 'card-compact' : ''} ${imageFull ? 'image-full' : ''} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Card.displayName = 'Card';

export const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', children, ...props }, ref) => (
        <div ref={ref} className={`card-body ${className}`} {...props}>{children}</div>
    )
);
CardBody.displayName = 'CardBody';

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className = '', children, ...props }, ref) => (
        <h2 ref={ref} className={`card-title ${className}`} {...props}>{children}</h2>
    )
);
CardTitle.displayName = 'CardTitle';

export const CardActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', children, ...props }, ref) => (
        <div ref={ref} className={`card-actions ${className}`} {...props}>{children}</div>
    )
);
CardActions.displayName = 'CardActions';
