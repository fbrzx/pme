import React from 'react';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'boxed' | 'bordered' | 'lifted';
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
    ({ className = '', variant, size, children, ...props }, ref) => {
        return (
            <div
                role="tablist"
                ref={ref}
                className={`tabs ${variant ? `tabs-${variant}` : ''} ${size ? `tabs-${size}` : ''} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Tabs.displayName = 'Tabs';

export interface TabProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'content'> {
    label: string;
    active?: boolean;
    content?: React.ReactNode;
}

export const Tab = React.forwardRef<HTMLInputElement, TabProps>(
    ({ className = '', label, active, content, ...props }, ref) => {
        return (
            <>
                <input
                    ref={ref}
                    type="radio"
                    role="tab"
                    className={`tab ${active ? 'tab-active' : ''} ${className}`}
                    aria-label={label}
                    {...props}
                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {content}
                </div>
            </>
        );
    }
);
Tab.displayName = 'Tab';
