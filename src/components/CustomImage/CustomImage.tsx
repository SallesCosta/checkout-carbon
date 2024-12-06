'use client'

import React from 'react'
import Image, { ImageProps } from 'next/image'

export interface Props {
  src: string
  alt: string
  height?: number
  width?: number
  className?: string
  layout?: ImageProps['layout']
  sizes?: string
  objectFit?: ImageProps['objectFit']
  priority?: boolean
}

const customLoader = ({ src }: { src: string }) => {
  return src
}

export const CustomImage = (props: Props) => {
  const { width, height } = props

  const img = new window.Image()
  img.src = props.src

  return (
    <Image
      {...props}
      aria-hidden
      src={props.src}
      alt={props.alt}
      width={width ?? img.width}
      height={height ?? img.height}
      loader={customLoader}
      unoptimized={true}
    />
  )
}
