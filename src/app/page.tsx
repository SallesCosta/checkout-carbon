import { redirect } from 'next/navigation'

export default async function Home() {
  redirect('/checkout?co2=1&cred=2')
}
