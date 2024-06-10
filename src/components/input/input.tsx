import { cn } from "../../utils";
import type * as T from "./types";

export const Input = ({ label, error, ...props }: T.Props) => {
  return (
    <label className={cn("form-control w-full", props.className)}>
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}

      <input
        {...props}
        className={cn(
          "input input-bordered w-full border-gray-300",
          error && "border-red-600"
        )}
      />

      {error && (
        <div className="label">
          <span className="label-text-alt text-red-600">{error}</span>
        </div>
      )}
    </label>
  );
};
