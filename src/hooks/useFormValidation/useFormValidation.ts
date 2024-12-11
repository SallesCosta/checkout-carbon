import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { masks } from '@/hooks/useCredPrice/Mask'
import { z } from 'zod'
import { useCustomParams } from '@/hooks/useCustomParams/useCustomParams'
import { useProcessPayment } from '@/hooks/useProcessPayment/useProcessPayment'
import { PostData } from '@/services/services'

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
    .min(11, 'Mínimo 11 caracteres')
    .refine((value) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(masks.cpf(value)), {
      message: 'CPF inválido',
    }),
  email: z
    .string()
    .min(1, { message: 'Formato inválido.' })
    .email('Formato inválido.'),
  cardNumber: z
    .string()
    .min(16, 'Número de cartão inválido')
    .refine((value) => /^[\d\s]+$/.test(masks.creditCard(value)), {
      message: 'Número de cartão inválido',
    }),
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
  const { getParams } = useCustomParams()

  const { mutation, isSending } = useProcessPayment()
  const handleSubmitPayment = (data: PostData) => {
    mutation.mutate(data)
  }

  const co2 = getParams('co2')
  const cred = getParams('cred')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
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

  const removeMasks = (value: string) => value.replace(/[^\d]/g, '')

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const fullYear = `20${values.yearValidate}`
    const data = {
      co2,
      cred,
      card_number: removeMasks(values.cardNumber),
      expiration_month: values.monthValidate,
      expiration_year: fullYear,
      security_code: values.cvv,
      cardholder: {
        name: values.name,
        identification: {
          type: 'CPF',
          number: removeMasks(values.cpf),
        },
      },
    }
    handleSubmitPayment(data)
  }

  const isSubmitDisabled = !form.formState.isValid

  return { onSubmit, form, isSubmitDisabled, isSending }
}
