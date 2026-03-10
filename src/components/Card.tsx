import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'outline';
  noPadding?: boolean;
}

export function Card({ children, className = '', variant = 'default', noPadding = false, ...props }: CardProps) {
  const variants = {
    default: 'bg-white shadow-sm ring-1 ring-slate-200',
    primary: 'bg-deep-twilight text-white shadow-lg',
    outline: 'bg-transparent border-2 border-slate-200',
  };
  
  return (
    <div className={`rounded-3xl ${noPadding ? '' : 'p-6'} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
