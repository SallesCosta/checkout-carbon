import { useRouter } from 'next/navigation'

const hasExternalUrl = (path: string) => /(http|https)/.test(path)

export const useRedirect = () => {
  const router = useRouter()

  const redirect = (path: string) => {
    if (hasExternalUrl(path)) {
      window.open(path, '_blank')
    } else {
      router.push(path)
    }
  }

  return { redirect }
}
