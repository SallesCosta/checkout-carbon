import { useMutation } from '@tanstack/react-query'
import { postCredPrice, PostData } from '@/services/services'
import { useRedirect } from '@/hooks/useRedirect/useRedirect'
import { useState } from 'react'

export const useProcessPayment = () => {
  const { redirect } = useRedirect()
  const [isSending, setIsSending] = useState(false)

  const mutation = useMutation({
    mutationFn: (data: PostData) => postCredPrice(data),
    onMutate: () => {
      setIsSending(true)
    },
    onSuccess: async () => {
      setIsSending(false)
      redirect('/final?status=success')
    },
    onError: () => {
      setIsSending(false)
      redirect('/final?status=error')
    },
    onSettled: () => {
      setIsSending(false)
    },
  })

  return { mutation, isSending }
}
