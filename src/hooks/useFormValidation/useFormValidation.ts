import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { masks } from '@/hooks/useCredPrice/Mask'
import { z } from 'zod'

const monthValidationSchema = z.string().refine((value) => {
  const month = Number(value)
  return month > 0 && month <= 12
}, 'Maximo 12')

const minYear = new Date().getFullYear().toString().slice(-2)

const yearValidationSchema = (minYear: number) =>
  z.string().refine((value) => {
    const year = Number(value)
    return year > minYear
  }, `Mínimo ${minYear}`)

export const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  phone: z.string().refine((value) => /^\(\d{2}\) \d{4,5}-\d{4}$/.test(value), {
    message:
      'O número de telefone deve estar no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.',
  }),
  cpf: z
    .string()
    .min(11, 'Mínimo 11 caractéres')
    .transform((value) => masks.cpf(value)),
  email: z
    .string()
    .min(1, { message: 'Formato inválido.' })
    .email('Formato inválido.'),
  cardNumber: z
    .string()
    .min(16, 'Número de cartão inválido')
    .transform((value) => masks.creditCard(value)),
  monthValidate: monthValidationSchema,
  yearValidate: yearValidationSchema(Number(minYear)),

  cvv: z.string().min(3, 'CVV inválido'),
  shares: z.enum([
    '1x R$ 300',
    '2x R$ 150',
    '3x R$ 100',
    '4x R$ 75',
    '5x R$ 60',
    '6x R$ 50',
    '7x R$ 42,86',
    '8x R$ 37,05',
    '9x R$ 33,33',
    '10x R$ 30',
    '11x R$ 27,27',
    '12x R$ 25',
    '',
  ]),
})

export const useFormValidation = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      cpf: '',
      email: '',
      cardNumber: '',
      monthValidate: '',
      yearValidate: '',
      cvv: '',
      shares: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return { onSubmit, form }
}
