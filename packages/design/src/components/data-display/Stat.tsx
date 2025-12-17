import React from 'react';

export interface StatProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: React.ReactNode;
    value: React.ReactNode;
    desc?: React.ReactNode;
    figure?: React.ReactNode;
    horizontal?: boolean;
}

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
    ({ className = '', title, value, desc, figure, ...props }, ref) => {
        return (
            <div ref={ref} className={`stat ${className}`} {...props}>
                {figure && <div className="stat-figure text-secondary">{figure}</div>}
                {title && <div className="stat-title">{title}</div>}
                <div className="stat-value">{value}</div>
                {desc && <div className="stat-desc">{desc}</div>}
            </div>
        );
    }
);
Stat.displayName = 'Stat';

export const Stats = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { horizontal?: boolean }>(
    ({ className = '', horizontal, children, ...props }, ref) => (
        <div ref={ref} className={`stats ${horizontal ? 'stats-horizontal' : 'stats-vertical'} shadow ${className}`} {...props}>
            {children}
        </div>
    )
);
Stats.displayName = 'Stats';
