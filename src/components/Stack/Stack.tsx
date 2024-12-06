import { ElementType, HTMLAttributes, ReactNode, RefObject } from 'react'
import { cn } from '@/lib/utils'

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  dir?: 'row' | 'col'
  ref?: RefObject<HTMLDivElement>
  as?: ElementType
}

export const Stack = ({
  children,
  dir = 'row',
  ref,
  as: Component = 'div',
  ...props
}: StackProps) => {
  return (
    <Component
      data-dir={dir}
      className={cn('flex data-[dir=col]:flex-col', props.className)}
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  )
}

interface CenterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const Center = ({ children, className, ...props }: CenterProps) => {
  return (
    <div
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      {children}
    </div>
  )
}
