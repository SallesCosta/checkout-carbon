// 'use client'

import { Stack } from '@/components/Stack/Stack'
import { CheckoutForm } from '@/components/CheckoutForm/CheckoutForm'
import { Summary } from '@/components/Summary/Summary'

export default async function Home() {
  return (
    <Stack
      as="main"
      className="relative min-h-[1000px] min-h-screen overflow-y-auto bg-white"
    >
      <CheckoutForm />
      <Summary />
    </Stack>
  )
}
