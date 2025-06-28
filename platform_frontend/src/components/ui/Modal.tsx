import React, { useEffect, useRef } from "react";

// PUBLIC_INTERFACE
/**
 * Modal – Accessible dialog/modal for SeniorFit
 * Props:
 *   - open: show/hide flag
 *   - onClose: function, called on overlay/cancel/esc
 *   - children: modal content
 *   - title: modal heading (screen reader and visual)
 * 
 * Focus trap, ARIA role, closes on Esc/overlay click. Keyboard accessible.
 */
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children, title }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [open, onClose]);

  // Trap focus inside modal
  useEffect(() => {
    if (open && ref.current) {
      const focusableEls = ref.current.querySelectorAll<HTMLElement>(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
      const first = focusableEls[0];
      first?.focus();
    }
  }, [open]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      style={{ transition: "background 0.2s" }}
    >
      <div
        ref={ref}
        className="bg-background text-foreground rounded-xl p-6 sm:p-8 shadow-card w-full max-w-lg mx-2 relative"
        role="document"
        aria-labelledby={title ? "modal-title" : undefined}
        onClick={(e) => e.stopPropagation()}
        tabIndex={0}
      >
        {title && (
          <h2 id="modal-title" className="mb-4 text-2xl font-bold text-primary">
            {title}
          </h2>
        )}
        {children}
        <button
          className="absolute top-3 right-3 bg-transparent text-foreground text-2xl rounded hover:bg-foreground/10 focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close modal"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};
