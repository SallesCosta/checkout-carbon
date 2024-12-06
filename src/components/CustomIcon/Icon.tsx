'use client'

import { ComponentPropsWithoutRef } from 'react'
import {
  AudioLines,
  Piano,
  Waves,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Phone,
} from 'lucide-react'
import { openToast } from '@/helpers/openToaster/openToaster'
import { Stack } from '@/components/Stack/Stack'

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  icon:
    | 'AudioLines'
    | 'Piano'
    | 'Waves'
    | 'MapPin'
    | 'Mail'
    | 'Github'
    | 'Linkedin'
    | 'Phone'
}

export const CustomIcon = ({ icon, ...props }: IconProps) => {
  const Comp = {
    AudioLines,
    Piano,
    Waves,
    MapPin,
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
      <CustomIcon icon="Waves" strokeWidth={1.75} onClick={openToast} />
      <CustomIcon icon="Piano" strokeWidth={1.75} onClick={openToast} />
      <CustomIcon icon="AudioLines" strokeWidth={1.75} onClick={openToast} />
    </Stack>
  )
}
