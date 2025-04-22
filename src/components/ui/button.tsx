
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Matches provided design images exactly:
 * - Height: md=48px, sm=40px, lg=52px, icon=40px.
 * - Padding: px-5 for sm, px-6 for md, px-8 for lg.
 * - Border radius: rounded-lg (8px)
 * - Solid background colors and sharp borders
 * - Font: Medium weight, no letter spacing
 * - Variant tokens: primary, secondary, tertiary, tertiary-left, outline, ghost, default, destructive.
 * - Focus visible style.
 */

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-omantel-blue transition-all",
    "disabled:pointer-events-none disabled:opacity-50 select-none",
    "rounded-lg", // 8px corners as shown in image
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-omantel-blue text-white hover:bg-omantel-blue/90 active:bg-omantel-blue/80",
        secondary:
          "border-2 border-omantel-blue text-omantel-blue bg-white hover:bg-omantel-blue/10 active:bg-omantel-blue/20",
        tertiary:
          "text-omantel-darkBlue bg-white hover:bg-gray-50 active:bg-gray-100 border border-gray-200",
        "tertiary-left":
          "text-omantel-darkBlue bg-white hover:bg-gray-50 active:bg-gray-100 rounded-l-lg border border-gray-200 border-r-0",
        outline:
          "border border-gray-300 bg-white text-omantel-darkBlue hover:bg-gray-50 hover:border-omantel-blue",
        ghost:
          "bg-transparent hover:bg-gray-50 text-omantel-darkBlue",
        default:
          "bg-omantel-orange text-white hover:bg-omantel-orange/90 active:bg-omantel-orange/80",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 active:bg-red-700"
      },
      size: {
        sm: "h-10 min-h-[40px] text-sm px-4",        // 40px, padding left/right 16px
        md: "h-12 min-h-[48px] text-base px-5",      // 48px, padding left/right 20px
        lg: "h-[52px] min-h-[52px] text-lg px-6",    // 52px, padding left/right 24px
        icon: "h-10 w-10 min-h-[40px] min-w-[40px] p-0", // 40x40, no extra padding
        default: "h-12 min-h-[48px] text-base px-5"  // same as md
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
            <svg className="animate-spin h-5 w-5 text-inherit" viewBox="0 0 24 24">
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
