import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { useCustomParams } from '@/hooks/useCustomParams/useCustomParams'
import { useProcessPayment } from '@/hooks/useProcessPayment/useProcessPayment'
import { PostData } from '@/services/services'
import { formSchema } from '@/hooks/useFormValidation/formHelpers'

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
