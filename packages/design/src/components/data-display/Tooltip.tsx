import React from 'react';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    tip: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    open?: boolean; // force open
    color?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
    ({ className = '', tip, position, open, color, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`tooltip ${position ? `tooltip-${position}` : ''} ${open ? 'tooltip-open' : ''} ${color ? `tooltip-${color}` : ''} ${className}`}
                data-tip={tip}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Tooltip.displayName = 'Tooltip';
