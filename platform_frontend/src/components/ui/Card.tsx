import React from "react";

// PUBLIC_INTERFACE
/**
 * Card – For senior-friendly, accessible content presentation.
 * Props:
 *   - children: Content in the card area
 *   - className: Additional classes
 *   - ariaLabel: Optional, for accessibility
 * 
 * Uses high-contrast background/foreground and generous padding.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  ariaLabel,
  ...rest
}) => (
  <div
    className={`
      rounded-xl
      bg-background
      text-foreground
      shadow-card
      border border-primary/25
      p-6 sm:p-8
      text-lg sm:text-xl
      font-sans
      ${className}
    `}
    aria-label={ariaLabel}
    tabIndex={0}
    {...rest}
  >
    {children}
  </div>
);
