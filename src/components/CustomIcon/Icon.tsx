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

export const ChevronDown = () => {
  return (
    <svg
      width="11"
      height="8"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 1H1.55765C0.64734 1 0.210471 2.11736 0.879371 2.7348L4.82172 6.3739C5.20478 6.72749 5.79522 6.72749 6.17828 6.3739L10.1206 2.7348C10.7895 2.11736 10.3527 1 9.44235 1H5.5Z"
        fill="#979797"
        stroke="#979797"
      />
    </svg>
  )
}
