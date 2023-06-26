import * as React from "react";

import { cn } from "@/common/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-9 w-full rounded-md border bg-transparent py-1 px-3 text-sm text-grayTextContrast placeholder:text-graySolid focus:outline-none focus:ring-2 focus:ring-accentSolid disabled:cursor-not-allowed disabled:opacity-50",
          props.error
            ? "border-dangerBorder text-dangerText"
            : "border-grayBorder",
          className
        )}
        ref={ref}
        {...props}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
