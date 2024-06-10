import { cn } from "../../utils";
import { variants } from "./variants";
import type * as T from "./types";

export const Button = ({
  className,
  size,
  variant,
  children,
  isLoading = false,
  ...props
}: T.Props) => {
  return (
    <button
      {...props}
      type={props.type || "button"}
      className={cn(variants({ variant, size, className }))}
    >
      {isLoading ? <span className="loading loading-spinner" /> : null}
      {children}
    </button>
  );
};
