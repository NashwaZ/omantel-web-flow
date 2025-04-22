
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button styling:
 * - Corner radius: 16px (rounded-[16px])
 * - Horizontal padding: 16px (px-4)
 * - Sizes: sm=40px, md=48px, lg=52px
 * - Primary: bg-omantel-orange text-white 
 * - Secondary: border border-omantel-orange text-omantel-orange bg-white
 * - Tertiary: text-neutral-900 bg-white (no border)
 * - Tertiary Left: text-neutral-900 bg-white (rounded-l-[16px])
 * - Font: medium, keep gap-2 for icons.
 */

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-omantel-orange",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none",
    "rounded-[16px]", // custom roundness
    "px-4" // horizontal padding 16px
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-omantel-orange text-white hover:bg-[#F97316] active:bg-[#DF6C0A]",
        secondary:
          "border border-omantel-orange text-omantel-orange bg-white hover:bg-omantel-orange hover:text-white active:bg-[#DF6C0A]",
        tertiary:
          "text-omantel-darkBlue bg-white hover:bg-gray-50 active:bg-gray-100",
        "tertiary-left":
          "text-omantel-darkBlue bg-white hover:bg-gray-50 active:bg-gray-100 rounded-l-[16px]"
      },
      size: {
        sm: "h-10 min-h-[40px] text-base", // 40px
        md: "h-12 min-h-[48px] text-base", // 48px
        lg: "h-[52px] min-h-[52px] text-lg"  // 52px
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, disabled, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          className
        )}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Loading...
          </span>
        ) : children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
