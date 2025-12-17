import React from 'react';

export interface MaskProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    variant?: 'squircle' | 'heart' | 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon' | 'diamond' | 'square' | 'circle' | 'parallelogram' | 'parallelogram-2' | 'parallelogram-3' | 'parallelogram-4' | 'star' | 'star-2' | 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4';
}

export const Mask = React.forwardRef<HTMLImageElement, MaskProps>(
    ({ className = '', variant = 'squircle', ...props }, ref) => {
        return (
            <img
                ref={ref}
                className={`mask mask-${variant} ${className}`}
                {...props}
            />
        );
    }
);
Mask.displayName = 'Mask';
