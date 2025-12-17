import React from 'react';

export interface StepsProps extends React.HTMLAttributes<HTMLUListElement> {
    vertical?: boolean;
}

export const Steps = React.forwardRef<HTMLUListElement, StepsProps>(
    ({ className = '', vertical, children, ...props }, ref) => {
        return (
            <ul
                ref={ref}
                className={`steps ${vertical ? 'steps-vertical' : ''} ${className}`}
                {...props}
            >
                {children}
            </ul>
        );
    }
);
Steps.displayName = 'Steps';

export interface StepProps extends React.LiHTMLAttributes<HTMLLIElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral';
    content?: string;
}

export const Step = React.forwardRef<HTMLLIElement, StepProps>(
    ({ className = '', variant, content, children, ...props }, ref) => {
        return (
            <li
                ref={ref}
                className={`step ${variant ? `step-${variant}` : ''} ${className}`}
                data-content={content}
                {...props}
            >
                {children}
            </li>
        );
    }
);
Step.displayName = 'Step';
