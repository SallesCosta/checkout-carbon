import { Stack } from '@/components/Stack/Stack'
import { CheckoutForm } from '@/components/CheckoutForm/CheckoutForm'
import { Summary } from '@/components/Summary/Summary'
import { Suspense } from 'react'

export default async function Checkout() {
  return (
    <Stack
      as="main"
      className="relative min-h-[100dvh] overflow-y-auto bg-white md:flex md:flex-row md:justify-between"
    >
      <Suspense fallback={<div>carregando...</div>}>
        <CheckoutForm />
        <Summary />
      </Suspense>
    </Stack>
  )
}
