import React from 'react';
import { cn } from '@/lib/utils';

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center min-h-screen bg-p-background text-p-foreground p-4 sm:p-6 md:p-8',
        className
      )}
    >
      {/* 
        This layout provides the full-screen background and centering.
        The children (e.g., LoginForm, CenteredFormLayout) are expected to define 
        their own specific width, padding, surface background, and shadow as needed.
        For example, LoginForm has 'w-96', 'p-6', 'bg-surface', 'rounded-lg', 'shadow-md'.
      */}
      {children}
    </div>
  );
};

export default AuthLayout;
