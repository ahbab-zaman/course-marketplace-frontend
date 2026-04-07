import React from "react";

interface FormWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

export function FormWrapper({ title, description, children, onSubmit }: FormWrapperProps) {
  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        {description && <p className="text-balance text-muted-foreground">{description}</p>}
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
        {children}
      </form>
    </div>
  );
}
