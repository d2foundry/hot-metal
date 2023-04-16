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
          "flex h-10 w-full rounded-md border  bg-transparent py-2 px-3 text-sm placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900",
          props.error
            ? "border-red-800 text-red-600"
            : "border-neutral-300 dark:border-neutral-700 dark:text-neutral-50",
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
