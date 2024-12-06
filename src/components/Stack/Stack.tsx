import { HTMLAttributes, ReactNode, RefObject } from 'react'
import { cn } from '@/lib/utils'

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  dir?: 'row' | 'col'
  ref?: RefObject<HTMLDivElement>
}

export const Stack = ({ children, dir = 'row', ref, ...props }: StackProps) => {
  return (
    <div
      data-dir={dir}
      className={cn('flex data-[dir=col]:flex-col', props.className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
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
