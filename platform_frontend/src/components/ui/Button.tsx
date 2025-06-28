import React from "react";

// PUBLIC_INTERFACE
/**
 * Button – Accessible, senior-friendly button component.
 * Props:
 *   - children: ReactNode (button label/content)
 *   - onClick: () => void (event handler)
 *   - variant: 'primary' | 'secondary' | 'accent' | 'ghost'
 *   - type: Button type attribute
 *   - disabled: Disabled state
 *   - ariaLabel: Optional, for accessibility
 * 
 * WCAG 2.1 AA compliant (contrast, size, focus/keyboard)
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost";
  children: React.ReactNode;
  ariaLabel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = "primary",
    children,
    className = "",
    type = "button",
    disabled = false,
    ariaLabel,
    ...rest
  }, ref) => {
    // Map variant to color
    const variants: Record<string, string> = {
      primary:
        "bg-primary text-white hover:bg-primary-light focus-visible:ring-2 focus-visible:ring-accent",
      secondary:
        "bg-secondary text-white hover:bg-secondary-light focus-visible:ring-2 focus-visible:ring-accent",
      accent:
        "bg-accent text-accent-contrast hover:bg-accent-light focus-visible:ring-2 focus-visible:ring-primary",
      ghost:
        "bg-background border border-primary text-primary hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary",
    };
    return (
      <button
        type={type}
        className={`
          font-sans 
          rounded-xl 
          font-semibold 
          text-lg sm:text-xl
          px-6 py-3 
          shadow-sm
          transition-all
          outline-none
          focus:outline-none
          disabled:opacity-60
          disabled:cursor-not-allowed
          ${variants[variant]} 
          ${className}
        `}
        ref={ref}
        disabled={disabled}
        aria-label={ariaLabel}
        tabIndex={0}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
