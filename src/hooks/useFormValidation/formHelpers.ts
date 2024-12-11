import { z } from 'zod'
import { masks } from '@/hooks/useCredPrice/Mask'

const monthValidationSchema = z.string().refine((value) => {
  const month = Number(value)
  return month > 0 && month <= 12
}, 'máximo 12')

const minYear = new Date().getFullYear().toString().slice(-2)

const yearValidationSchema = (minYear: number) =>
  z.string().refine((value) => {
    const year = Number(value)
    return year > minYear
  }, `mínimo ${minYear}`)

export const formSchema = z.object({
  name: z.string().min(2, 'nome deve ter pelo menos 2 caracteres'),
  phone: z.string().refine((value) => /^\(\d{2}\) \d{4,5}-\d{4}$/.test(value), {
    message:
      'o número de telefone deve estar no formato (xx) xxxx-xxxx ou (xx) xxxxx-xxxx',
  }),
  cpf: z
    .string()
    .min(11, 'mínimo 11 caracteres')
    .refine((value) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(masks.cpf(value)), {
      message: 'cpf inválido',
    }),
  email: z
    .string()
    .min(1, { message: 'formato inválido' })
    .email('formato inválido'),
  cardNumber: z
    .string()
    .min(16, 'número de cartão inválido')
    .refine((value) => /^[\d\s]+$/.test(masks.creditCard(value)), {
      message: 'número de cartão inválido',
    }),
  monthValidate: monthValidationSchema,
  yearValidate: yearValidationSchema(Number(minYear)),
  cvv: z
    .string()
    .min(3, 'mínimo 3 dígitos')
    .max(4, 'máximo 4 dígitos')
    .regex(/^\d+$/, 'cvv deve conter apenas números'),
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
