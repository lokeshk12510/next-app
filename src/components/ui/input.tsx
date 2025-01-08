import * as React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.ComponentProps<'input'> {
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconPosition = 'start', ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {icon && iconPosition === 'start' && <div className="absolute left-3">{icon}</div>}
        <input
          type={type}
          className={cn(
            'bg-primary-lighter flex h-12 w-full rounded-xl border border-input px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            icon && iconPosition === 'start' ? 'pl-12' : '',
            icon && iconPosition === 'end' ? 'pr-12' : '',
            className,
          )}
          ref={ref}
          {...props}
        />
        {icon && iconPosition === 'end' && <div className="absolute right-3">{icon}</div>}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
