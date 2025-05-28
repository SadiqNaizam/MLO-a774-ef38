import React from 'react';
import { cn } from '@/lib/utils';

interface SecondaryLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SecondaryLink: React.FC<SecondaryLinkProps> = ({ children, href, className, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'text-sm text-p-secondary-text hover:text-p-secondary-text/80 hover:underline',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm',
        'transition-colors duration-200',
        className
      )}
    >
      {children}
    </a>
  );
};

export default SecondaryLink;
