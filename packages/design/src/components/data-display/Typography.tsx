import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // visual style override
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ children, className = '', level = 1, variant, ...props }, ref) => {
        const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        const visualVariant = variant || `h${level}`;

        // Map variants to classes
        const sizes = {
            h1: "text-5xl font-extrabold mb-6",
            h2: "text-3xl font-bold mb-4",
            h3: "text-2xl font-bold mb-3",
            h4: "text-xl font-bold mb-2",
            h5: "text-lg font-bold mb-2",
            h6: "text-base font-bold mb-2",
        };

        return (
            <Tag ref={ref} className={`${sizes[visualVariant]} ${className}`} {...props}>
                {children}
            </Tag>
        );
    }
);
Heading.displayName = 'Heading';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
    as?: React.ElementType;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
    ({ children, className = '', size = 'base', weight = 'normal', as: Component = 'p', ...props }, ref) => {
        const sizeClasses: Record<string, string> = {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
            '3xl': 'text-3xl',
            '4xl': 'text-4xl',
        };

        const weightClasses: Record<string, string> = {
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
            extrabold: 'font-extrabold',
        };

        return (
            <Component
                ref={ref}
                className={`${sizeClasses[size] || 'text-base'} ${weightClasses[weight] || 'font-normal'} ${className}`}
                {...props}
            >
                {children}
            </Component>
        );
    }
);
Text.displayName = 'Text';

export const Typography = {
    Heading,
    Text,
};
