import { CheckoutForm } from '@/components/CheckoutForm/CheckoutForm'
import { Stack } from '@/components/Stack/Stack'
import { Summary } from '@/components/Summary/Summary'

export default async function Home() {
  return (
    <Stack
      as="main"
      className="relative min-h-[100dvh] overflow-y-auto bg-white md:flex md:flex-row md:justify-between"
    >
      <CheckoutForm />
      <Summary />
    </Stack>
  )
}
