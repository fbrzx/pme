import React from 'react';

export interface DropdownProps extends React.HTMLAttributes<HTMLDetailsElement> {
    label: React.ReactNode;
    open?: boolean; // Controlled state if needed, though DaisyUI uses <details> usually
    horizontal?: 'end' | 'left' | 'right';
    vertical?: 'top' | 'bottom';
    hover?: boolean;
}

export const Dropdown = React.forwardRef<HTMLDetailsElement, DropdownProps>(
    ({ className = '', label, children, horizontal, vertical, hover, ...props }, ref) => {
        const classes = [
            'dropdown',
            horizontal === 'end' && 'dropdown-end',
            horizontal === 'left' && 'dropdown-left',
            horizontal === 'right' && 'dropdown-right',
            vertical === 'top' && 'dropdown-top',
            vertical === 'bottom' && 'dropdown-bottom',
            hover && 'dropdown-hover',
            className
        ].filter(Boolean).join(' ');

        return (
            <details ref={ref} className={classes} {...props}>
                <summary className="m-1 btn">{label}</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    {children}
                </ul>
            </details>
        );
    }
);
Dropdown.displayName = 'Dropdown';
