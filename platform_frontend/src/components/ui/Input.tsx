import React from "react";

// PUBLIC_INTERFACE
/**
 * Input – Accessible text input for senior-friendly forms.
 * Props:
 *  - label: string (visible label for accessibility)
 *  - id: string (input id)
 *  - type: input type (default "text")
 *  - required, disabled, ... (standard input props)
 * 
 * Large font, high contrast, visible:focus and label.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, type = "text", className = "", ...rest }, ref) => (
    <div className="flex flex-col gap-1 mb-4">
      <label
        htmlFor={id}
        className="font-semibold text-lg text-primary mb-0.5"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        ref={ref}
        className={`
          text-base sm:text-lg
          px-4 py-3
          border-2 border-primary
          rounded-xl
          focus:outline-none focus:ring-2 focus:ring-accent
          bg-background text-foreground
          placeholder:text-foreground/60
          shadow
          transition
          ${className}
        `}
        aria-label={label}
        {...rest}
      />
    </div>
  )
);

Input.displayName = "Input";
