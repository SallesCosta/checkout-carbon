// 'use client'

import { Stack } from '@/components/Stack/Stack'
import { CheckoutForm } from '@/components/CheckoutForm/CheckoutForm'
import { Summary } from '@/components/Summary/Summary'
import { Loader } from '@/components/Loader/Loader'

export default async function Home() {
  return (
    <Stack
      as="main"
      className="relative min-h-[100dvh] overflow-y-auto bg-white md:flex md:flex-row md:justify-between"
    >
      <CheckoutForm />
      <Summary />
      <Loader isLoading={false} />
    </Stack>
  )
}
