'use client'

import React, { FC, ElementType } from 'react'
import { cn } from '@/lib/utils'

interface TradTextProps extends React.HTMLAttributes<HTMLElement> {
  text: string
  as?: ElementType
}

export const Text = ({
  text,
  as: Component = 'p',
  ...props
}: TradTextProps) => {
  return <Component {...props}>{text}</Component>
}

export const Title: FC<TradTextProps> = ({
  text,
  as: Component = 'h1',
  className,
  ...props
}: TradTextProps) => {
  return (
    <Text
      text={text}
      as={Component}
      className={cn('text-2xl font-bold text-black', className)}
      {...props}
    />
  )
}
