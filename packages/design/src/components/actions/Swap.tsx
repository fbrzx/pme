import React from 'react';

export interface SwapProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    active?: boolean;
    onElement: React.ReactNode;
    offElement: React.ReactNode;
    type?: 'rotate' | 'flip';
}

export const Swap = React.forwardRef<HTMLLabelElement, SwapProps>(
    ({ className = '', active, onElement, offElement, type, children, ...props }, ref) => {
        return (
            <label ref={ref} className={`swap ${active ? 'swap-active' : ''} ${type ? `swap-${type}` : ''} ${className}`} {...props}>
                <input type="checkbox" checked={active} readOnly />
                <div className="swap-on">{onElement}</div>
                <div className="swap-off">{offElement}</div>
            </label>
        );
    }
);
Swap.displayName = 'Swap';
