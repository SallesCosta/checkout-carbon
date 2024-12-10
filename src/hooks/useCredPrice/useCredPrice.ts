'use client'
import { useQuery } from '@tanstack/react-query'
import { getCredPrice } from '@/services/services'

export const createStaleTimeInMinutes = (minutes: number) => 1000 * 60 * minutes

export const useCredPrice = (id: number) => {
  const { data, isError, isFetching, isSuccess } = useQuery({
    queryKey: ['credPrice'],
    queryFn: () => getCredPrice(id),
    refetchOnWindowFocus: false,
    staleTime: createStaleTimeInMinutes(5),
    select: (data) => data?.amout,
  })

  if (isSuccess) {
    console.log('data...', data)
  }
  return { data, isError, isFetching }
}
