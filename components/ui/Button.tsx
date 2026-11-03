import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "navy" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none";

    const variantStyles = {
      primary:
        "bg-[#285B9D] hover:bg-[#23518c] text-white shadow-md hover:shadow-lg",
      navy: "bg-[#00245B] hover:bg-[#001c47] text-white shadow-md hover:shadow-lg",
      outline:
        "border-2 border-white/80 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm",
    };

    const sizeStyles = {
      sm: "text-xs px-4 py-1.5",
      md: "text-sm md:text-base px-6 py-2 md:py-2.5",
      lg: "text-base md:text-lg px-8 py-3",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
