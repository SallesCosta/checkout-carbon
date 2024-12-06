'use client'

import { useStaticLang } from '@/helpers/languageSource/langContext'
import React, { FC, ElementType } from 'react'
import { Stack } from '@/components/Stack/Stack'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TradTextProps extends React.HTMLAttributes<HTMLElement> {
  text: string
  as?: ElementType
}

type LineProps = {
  title: string
  link: string
  where: string
  type?: string
}

export const Text = ({
  text,
  as: Component = 'p',
  ...props
}: TradTextProps) => {
  const { dictionary } = useStaticLang()

  if (!dictionary[text]) {
    return <Component {...props}>{text}</Component>
  }

  const translatedText = dictionary[text]

  return <Component {...props}>{translatedText}</Component>
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

export const Line = ({ link, where, title, type }: LineProps) => {
  const label = type === 'openSource' ? 'pull request' : 'certificate'
  return (
    <Stack className="items-center gap-2 p-2">
      <b>{title}</b>
      <span>{where}</span>
      <a href={link} target="_blank" className="text-blue-600">
        {label}
      </a>
      <ExternalLink className="w-3 text-blue-700" />
    </Stack>
  )
}
