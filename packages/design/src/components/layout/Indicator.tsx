import React from 'react';

export interface IndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    item: React.ReactNode;
    indicator?: React.ReactNode;
    position?: 'start' | 'center' | 'end' | 'top' | 'middle' | 'bottom';
    // daisyUi combines these, e.g. "indicator-top" + "indicator-start" or just default (top end)
}

export const Indicator = React.forwardRef<HTMLDivElement, IndicatorProps>(
    ({ className = '', item, indicator, children, ...props }, ref) => {
        return (
            <div ref={ref} className={`indicator ${className}`} {...props}>
                {indicator && <span className="indicator-item badge badge-secondary">{indicator}</span>}
                {children || item}
            </div>
        );
    }
);
Indicator.displayName = 'Indicator';
