import React from 'react';
import { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon } from '../../icons';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    status?: 'info' | 'success' | 'warning' | 'error';
    icon?: React.ReactNode;
}

const statusIcons: Record<NonNullable<AlertProps['status']>, React.ReactNode> = {
    info: <InfoIcon />,
    success: <SuccessIcon />,
    warning: <WarningIcon />,
    error: <ErrorIcon />
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className = '', status = 'info', icon, children, ...props }, ref) => {
        const statusClasses: Record<string, string> = {
            info: 'alert-info',
            success: 'alert-success',
            warning: 'alert-warning',
            error: 'alert-error',
        };

        return (
            <div
                role="alert"
                ref={ref}
                className={`alert ${statusClasses[status] || 'alert-info'} ${className}`}
                {...props}
            >
                {icon || statusIcons[status]}
                <span>{children}</span>
            </div>
        );
    }
);

Alert.displayName = 'Alert';
