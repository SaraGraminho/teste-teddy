import type { ComponentProps } from 'react';

export interface Props extends ComponentProps<'input'> {
  label?: string;
  error?: string;
}
