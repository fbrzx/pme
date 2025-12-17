import React from 'react';

export interface CollapseProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React.ReactNode;
    open?: boolean;
    icon?: 'arrow' | 'plus';
}

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
    ({ className = '', title, children, open, icon, ...props }, ref) => {
        return (
            <div ref={ref} className={`collapse ${icon === 'arrow' ? 'collapse-arrow' : icon === 'plus' ? 'collapse-plus' : ''} bg-base-200 ${className}`} {...props}>
                <input type="checkbox" checked={open} readOnly />
                <div className="collapse-title text-xl font-medium">
                    {title}
                </div>
                <div className="collapse-content">
                    {children}
                </div>
            </div>
        );
    }
);
Collapse.displayName = 'Collapse';
