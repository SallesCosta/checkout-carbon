import { Stack } from '@/components/Stack/Stack'
import { CheckoutForm } from '@/components/CheckoutForm/CheckoutForm'
import { Summary } from '@/components/Summary/Summary'
import { Suspense } from 'react'
import { Loader } from '@/components/Loader/Loader'

export default async function Checkout() {
  return (
    <Stack
      as="main"
      className="relative min-h-[100dvh] overflow-y-auto bg-white md:flex md:flex-row md:justify-between"
    >
      <Suspense fallback={<Loader isLoading={true} />}>
        <CheckoutForm />
        <Summary />
      </Suspense>
    </Stack>
  )
}
