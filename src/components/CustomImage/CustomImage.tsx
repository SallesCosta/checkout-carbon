'use client'

import React, { useEffect, useState } from 'react'
import Image, { ImageProps, StaticImageData } from 'next/image'

export interface Props {
  src: string | StaticImageData
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
  const [imageDimensions, setImageDimensions] = useState({
    width: width ?? 0,
    height: height ?? 0,
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof props.src === 'string') {
      const img = new window.Image()
      img.src = props.src
      img.onload = () => {
        setImageDimensions({
          width: width ?? img.width,
          height: height ?? img.height,
        })
      }
    }
  }, [props.src, width, height])

  return (
    <Image
      {...props}
      aria-hidden
      src={props.src}
      alt={props.alt}
      width={imageDimensions.width}
      height={imageDimensions.height}
      loader={customLoader}
      unoptimized={true}
    />
  )
}
