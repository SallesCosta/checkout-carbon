'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'

export const useCustomParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const getParams = (key: string): string => {
    return (searchParams?.get(key) as string) || ''
  }

  const setParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams?.toString())

    const existingValue = params.get(key)

    if (existingValue === null) {
      params.append(key, value)
    } else {
      params.set(key, value)
    }

    const url = `${pathname}?${params.toString()}`
    router.push(url)
  }

  return { getParams, setParams }
}
