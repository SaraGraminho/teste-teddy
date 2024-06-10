import { cva } from 'class-variance-authority';

export const variants = cva('btn', {
  variants: {
    variant: {
      primary: 'btn-primary text-white',
      'primary-outline': 'btn-primary btn-outline hover:!text-white',
      secondary: 'btn-secondary',
      'secondary-outline': 'btn-secondary btn-outline',
      success: 'btn-success text-white',
      'success-outline': 'btn-success btn-outline',
      error: 'btn-error text-white',
      'error-outline': 'btn-error btn-outline',
      ghost: 'btn-ghost',
      link: 'btn-link',
    },
    size: {
      default: 'w-auto',
      small: 'btn-sm',
      medium: 'btn-md',
      large: 'btn-lg',
      full: 'btn-block',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
});
