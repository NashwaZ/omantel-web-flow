
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Matches Figma UI:
 * - Height: md=48px, sm=40px, lg=52px, icon=40px.
 * - Padding: px-6 main (24px), tighter in icon, vertical fine-tuned.
 * - Full 16px corner radius.
 * - Drop shadow for main (when needed).
 * - Font: Medium, uppercase for primary, with tracking.
 * - Variant tokens: primary, secondary, tertiary, tertiary-left, outline, ghost, default, destructive.
 * - Focus visible style.
 */

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-omantel-orange transition-all",
    "disabled:pointer-events-none disabled:opacity-50 select-none",
    "rounded-[16px]",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-omantel-orange text-white shadow-sm hover:bg-[#FF9500] active:bg-[#DF6C0A]",
        secondary:
          "border border-omantel-orange text-omantel-orange bg-white hover:bg-omantel-orange hover:text-white active:bg-[#DF6C0A]",
        tertiary:
          "text-omantel-darkBlue bg-white hover:bg-gray-50 active:bg-gray-100 border border-gray-200",
        "tertiary-left":
          "text-omantel-darkBlue bg-white hover:bg-gray-50 active:bg-gray-100 rounded-l-[16px] border border-gray-200 border-r-0",
        outline:
          "border border-gray-200 bg-white text-omantel-darkBlue hover:bg-gray-50 hover:border-omantel-orange",
        ghost:
          "bg-transparent hover:bg-gray-50 text-omantel-darkBlue",
        default:
          "bg-omantel-blue text-white hover:bg-omantel-blue/90 active:bg-omantel-blue/80",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 active:bg-red-700"
      },
      size: {
        sm: "h-10 min-h-[40px] text-base px-5",        // 40px, padding left/right 20px
        md: "h-12 min-h-[48px] text-base px-6",        // 48px, padding left/right 24px
        lg: "h-[52px] min-h-[52px] text-lg px-8",      // 52px, padding left/right 32px
        icon: "h-10 w-10 min-h-[40px] min-w-[40px] p-0",// 40x40, no extra padding
        default: "h-12 min-h-[48px] text-base px-6"
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
          "font-medium", // Ensure medium font weight
          "tracking-wide", // Slight letter spacing
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

