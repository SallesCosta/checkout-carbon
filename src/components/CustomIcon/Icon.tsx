'use client'

import { ComponentPropsWithoutRef } from 'react'

import { Stack } from '@/components/Stack/Stack'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  icon: 'Mail' | 'Github' | 'Linkedin' | 'Phone'
}

export const CustomIcon = ({ icon, ...props }: IconProps) => {
  const Comp = {
    Mail,
    Github,
    Linkedin,
    Phone,
  }[icon]

  return <Comp {...props} />
}

export const ClientWrapper = () => {
  return (
    <Stack className="gap-2">
      <CustomIcon icon="Mail" strokeWidth={1.75} />
      <CustomIcon icon="Github" strokeWidth={1.75} />
      <CustomIcon icon="Linkedin" strokeWidth={1.75} />
      <CustomIcon icon="Phone" strokeWidth={1.75} />
    </Stack>
  )
}
