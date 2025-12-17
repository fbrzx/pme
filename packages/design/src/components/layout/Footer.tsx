import React from 'react';

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
    center?: boolean;
}

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
    ({ className = '', center = false, children, ...props }, ref) => {
        return (
            <footer
                ref={ref}
                className={`footer p-10 bg-base-200 text-base-content ${center ? 'footer-center' : ''} ${className}`}
                {...props}
            >
                {children}
            </footer>
        );
    }
);
Footer.displayName = 'Footer';

export const FooterTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className = '', children, ...props }, ref) => (
        <h6 ref={ref} className={`footer-title ${className}`} {...props}>{children}</h6>
    )
);
FooterTitle.displayName = 'FooterTitle';
