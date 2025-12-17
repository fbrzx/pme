import React from 'react';

export interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    count?: number;
    value?: number; // Controlled value
    name?: string;
    half?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'accent' | 'warning' | 'info' | 'success' | 'error';
    onChange?: (value: number) => void;
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
    ({ className = '', count = 5, value = 0, name = 'rating', half, size, variant, onChange, ...props }, ref) => {
        const sizeClasses = {
            xs: 'rating-xs',
            sm: 'rating-sm',
            md: 'rating-md',
            lg: 'rating-lg',
        };

        const stars = Array.from({ length: count }, (_, i) => i + 1);

        return (
            <div ref={ref} className={`rating ${half ? 'rating-half' : ''} ${size ? sizeClasses[size] : ''} ${className}`} {...props}>
                {half && <input type="radio" name={name} className="rating-hidden" checked={value === 0} readOnly />}
                {stars.flatMap((star) => {
                    if (half) {
                        return [
                            <input
                                key={`${star}-0.5`}
                                type="radio"
                                name={name}
                                className={`mask mask-star-2 mask-half-1 ${variant ? `bg-${variant}` : ''}`}
                                checked={value === star - 0.5}
                                onChange={() => onChange?.(star - 0.5)}
                            />,
                            <input
                                key={`${star}-1.0`}
                                type="radio"
                                name={name}
                                className={`mask mask-star-2 mask-half-2 ${variant ? `bg-${variant}` : ''}`}
                                checked={value === star}
                                onChange={() => onChange?.(star)}
                            />
                        ];
                    }
                    return (
                        <input
                            key={star}
                            type="radio"
                            name={name}
                            className={`mask mask-star-2 ${variant ? `bg-${variant}` : ''}`}
                            checked={value === star}
                            onChange={() => onChange?.(star)}
                        />
                    );
                })}
            </div>
        );
    }
);
Rating.displayName = 'Rating';
