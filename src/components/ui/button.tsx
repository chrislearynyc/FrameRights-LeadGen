import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'contrast';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';

        const variants = {
            primary: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900',
            secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus:ring-slate-200',
            ghost: 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50',
            contrast: 'bg-white text-slate-900 hover:bg-slate-100 border-none shadow-sm', // For dark backgrounds
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-11 px-6 text-base',
            lg: 'h-14 px-8 text-lg',
        };

        return (
            <Comp
                className={cn(
                    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
                    variants[variant],
                    sizes[size],
                    'disabled:opacity-50 disabled:pointer-events-none cursor-pointer', // added cursor-pointer for when it's an 'a' tag
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, cn };
