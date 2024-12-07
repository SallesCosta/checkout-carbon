// 'use client'

import { Stack } from '@/components/Stack/Stack'
import { CheckoutForm } from '@/components/CheckoutForm/CheckoutForm'
import { Summary } from '@/components/Summary/Summary'

export default async function Home() {
  return (
    <Stack as="main" className="relative h-screen bg-white">
      <CheckoutForm />
      <Summary />
    </Stack>
  )
}
