import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      variant="default" // Uses theme's primary color for background and text
      className={cn(
        'w-full',
        'h-10 md:h-11', // Consistent height, can be adjusted
        'text-base font-medium', // Typical button text styling
        'bg-p-button-background text-p-button-text hover:bg-p-button-background/90', // Explicit color from theme config
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
