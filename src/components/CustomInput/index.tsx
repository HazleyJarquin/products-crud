import * as React from "react";
import { cn } from "@/lib/utils";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  onIconClick?: () => void;
  iconPosition?: "left" | "right";
}

const CustomInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      type,
      error,
      icon,
      onIconClick,
      iconPosition = "right",
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-normal text-muted-foreground mb-1">
            {label}
          </label>
        )}
        <div className="relative w-full">
          {icon && (
            <span
              className={cn(
                "absolute inset-y-0 flex items-center p-2 text-muted-foreground",
                iconPosition === "left" ? "left-2" : "right-2",
                onIconClick && "cursor-pointer"
              )}
              onClick={onIconClick}
            >
              {icon}
            </span>
          )}
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-md border border-input bg-white text-black px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 outline-none focus:ring-0 focus:border-transparent",
              error && "border-red-500",
              icon && iconPosition === "left" && "pl-10",
              icon && iconPosition === "right" && "pr-10",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export { CustomInput };
