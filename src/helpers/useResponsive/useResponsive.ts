import { useState, useEffect } from 'react'

import { useMediaQuery } from 'react-responsive'

const tokens = {
  screenXs: 576,
  screenSm: 768,
  screenMd: 992,
  screenLg: 1200,
  screenXlg: 1440,
  screenFhd: 1920,
  screen2k: 2048,
  screen4k: 3840,
  screenMaxContainer: 1136,
}

const screens = {
  mobile: tokens.screenXs,
  mobileMax: `${tokens.screenSm - 1}px`,
  tablet: tokens.screenSm,
  tabletMax: `${tokens.screenMd - 1}px`,
  desktop: tokens.screenMd,
  desktopMax: `${tokens.screenLg - 1}px`,
  desktopL: tokens.screenLg,
}

export const useResponsive = () => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') setIsBrowser(true)
  }, [])

  const isMobile = useMediaQuery({ maxWidth: screens.mobileMax })

  const isTablet = useMediaQuery({
    minWidth: screens.tablet,
    maxWidth: screens.tabletMax,
  })

  const isLessThanTablet = useMediaQuery({ maxWidth: screens.tabletMax })

  const isDesktop = useMediaQuery({ minWidth: screens.desktop })

  const isDefault = useMediaQuery({ minWidth: screens.tablet })
  return {
    isDesktop: !isBrowser || isDesktop,
    isTablet: isBrowser && isTablet,
    isLessThanTablet: isBrowser && isLessThanTablet,
    isMobile: isBrowser && isMobile,
    isDefault: isBrowser && isDefault,
    isBrowser,
  }
}
