import React from 'react';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
}

// Simple wrapper
export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
    ({ className = '', children, ...props }, ref) => (
        <div ref={ref} className={`drawer ${className}`} {...props}>{children}</div>
    )
);
Drawer.displayName = 'Drawer';

export const DrawerToggle = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className = '', id, ...props }, ref) => (
        <input id={id} type="checkbox" className={`drawer-toggle ${className}`} ref={ref} {...props} />
    )
);
DrawerToggle.displayName = 'DrawerToggle';

export const DrawerContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', children, ...props }, ref) => (
        <div ref={ref} className={`drawer-content ${className}`} {...props}>{children}</div>
    )
);
DrawerContent.displayName = 'DrawerContent';

export const DrawerSide = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', children, ...props }, ref) => (
        <div ref={ref} className={`drawer-side ${className}`} {...props}>{children}</div>
    )
);
DrawerSide.displayName = 'DrawerSide';

export const DrawerOverlay = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
    ({ className = '', htmlFor, ...props }, ref) => (
        <label htmlFor={htmlFor} className={`drawer-overlay ${className}`} ref={ref} {...props} />
    )
);
DrawerOverlay.displayName = 'DrawerOverlay';
