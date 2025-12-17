import React from 'react';

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(
    ({ className = '', children, ...props }, ref) => {
        return (
            <div ref={ref} className={`breadcrumbs ${className}`} {...props}>
                <ul>
                    {children}
                </ul>
            </div>
        );
    }
);
Breadcrumbs.displayName = 'Breadcrumbs';

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
    ({ children, ...props }, ref) => (
        <li ref={ref} {...props}>{children}</li>
    )
);
BreadcrumbItem.displayName = 'BreadcrumbItem';
