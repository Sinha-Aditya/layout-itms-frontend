import React from 'react';
import { Card } from './Card';

interface FormLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler;
  className?: string;
}

export default function FormLayout({ title, description, children, onSubmit, className = '' }: FormLayoutProps) {
  return (
    <div className={`max-w-3xl mx-auto w-full ${className}`}>
      <Card>
        <div className="mb-8 border-b border-slate-100 pb-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
          {description && <p className="mt-2 text-sm text-slate-500">{description}</p>}
        </div>
        <form onSubmit={onSubmit} className="space-y-6">
          {children}
        </form>
      </Card>
    </div>
  );
}
