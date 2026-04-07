import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="grid gap-2">
        <Label htmlFor={props.id}>{label}</Label>
        <Input ref={ref} {...props} />
        {error && <p className="text-sm font-medium text-destructive">{error}</p>}
      </div>
    );
  }
);
InputField.displayName = "InputField";
