import React from 'react';

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
    ({ className = '', children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`navbar bg-base-100 ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Navbar.displayName = 'Navbar';

export const NavbarStart = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', children, ...props }, ref) => (
        <div ref={ref} className={`navbar-start ${className}`} {...props}>{children}</div>
    )
);
NavbarStart.displayName = 'NavbarStart';

export const NavbarCenter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', children, ...props }, ref) => (
        <div ref={ref} className={`navbar-center ${className}`} {...props}>{children}</div>
    )
);
NavbarCenter.displayName = 'NavbarCenter';

export const NavbarEnd = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', children, ...props }, ref) => (
        <div ref={ref} className={`navbar-end ${className}`} {...props}>{children}</div>
    )
);
NavbarEnd.displayName = 'NavbarEnd';
