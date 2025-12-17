import React from 'react';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    zebra?: boolean;
    pinRows?: boolean;
    pinCols?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
    ({ className = '', zebra, pinRows, pinCols, size, children, ...props }, ref) => {
        return (
            <div className="overflow-x-auto">
                <table
                    ref={ref}
                    className={`table ${zebra ? 'table-zebra' : ''} ${pinRows ? 'table-pin-rows' : ''} ${pinCols ? 'table-pin-cols' : ''} ${size ? `table-${size}` : ''} ${className}`}
                    {...props}
                >
                    {children}
                </table>
            </div>
        );
    }
);
Table.displayName = 'Table';
