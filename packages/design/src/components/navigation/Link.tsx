import React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'info' | 'warning' | 'error';
    hover?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ className = '', variant, hover = true, ...props }, ref) => {
        return (
            <a
                ref={ref}
                className={`link ${variant ? `link-${variant}` : ''} ${hover ? 'link-hover' : ''} ${className}`}
                {...props}
            />
        );
    }
);
Link.displayName = 'Link';
