import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";
import type { variants } from "./variants";

export interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof variants> {
  isLoading?: boolean;
}
