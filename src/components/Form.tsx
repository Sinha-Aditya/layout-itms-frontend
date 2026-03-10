import React from 'react';

export function Label({ children, className = '', ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={`block text-sm font-medium text-slate-700 mb-2 ${className}`} {...props}>
      {children}
    </label>
  );
}

export function Input({ className = '', error, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
  return (
    <div>
      <input 
        className={`block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ${
          error ? 'ring-red-300 focus:ring-red-500' : 'ring-slate-200 focus:ring-french-blue'
        } placeholder:text-slate-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-slate-50 transition-all ${className}`} 
        {...props} 
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function Select({ className = '', error, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { error?: string }) {
  return (
    <div>
      <select 
        className={`block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ${
          error ? 'ring-red-300 focus:ring-red-500' : 'ring-slate-200 focus:ring-french-blue'
        } focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-slate-50 transition-all ${className}`} 
        {...props}
      >
        {children}
      </select>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function Button({ children, variant = 'primary', className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'danger' }) {
  const variants = {
    primary: 'bg-french-blue text-white hover:bg-deep-twilight shadow-sm focus-visible:outline-french-blue',
    secondary: 'bg-sky-aqua/20 text-deep-twilight hover:bg-sky-aqua/30',
    outline: 'bg-white text-slate-700 ring-1 ring-inset ring-slate-200 hover:bg-slate-50',
    danger: 'bg-red-50 text-red-600 hover:bg-red-100 ring-1 ring-inset ring-red-200',
  };
  
  return (
    <button 
      className={`flex justify-center items-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}
