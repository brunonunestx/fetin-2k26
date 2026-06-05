import { Pressable, Text, type PressableProps } from 'react-native'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/src/lib/utils'

const buttonVariants = cva(
  'items-center justify-center rounded-xl active:opacity-80 disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-brand-500',
        secondary: 'bg-neutral-200',
        outline: 'border border-brand-500 bg-transparent',
        ghost: 'bg-transparent',
        destructive: 'bg-red-500',
      },
      size: {
        default: 'h-12 px-4',
        sm: 'h-10 px-3',
        lg: 'h-14 px-6',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const buttonTextVariants = cva('font-semibold', {
  variants: {
    variant: {
      default: 'text-white',
      secondary: 'text-neutral-900',
      outline: 'text-brand-500',
      ghost: 'text-brand-700',
      destructive: 'text-white',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg',
      icon: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type ButtonProps = PressableProps &
  VariantProps<typeof buttonVariants> & {
    label: string
    className?: string
    textClassName?: string
  }

export function Button({ label, className, textClassName, variant, size, ...props }: ButtonProps) {
  return (
    <Pressable className={cn(buttonVariants({ variant, size }), className)} {...props}>
      <Text className={cn(buttonTextVariants({ variant, size }), textClassName)}>{label}</Text>
    </Pressable>
  )
}

export { buttonVariants }
