import React from 'react';

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
    horizontal?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Menu = React.forwardRef<HTMLUListElement, MenuProps>(
    ({ className = '', horizontal = false, size = 'md', children, ...props }, ref) => (
        <ul ref={ref} className={`menu ${horizontal ? 'menu-horizontal' : ''} menu-${size} bg-base-200 rounded-box ${className}`} {...props}>{children}</ul>
    )
);
Menu.displayName = 'Menu';

export const MenuItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
    ({ className = '', children, ...props }, ref) => (
        <li ref={ref} className={className} {...props}>{children}</li>
    )
);
MenuItem.displayName = 'MenuItem';
