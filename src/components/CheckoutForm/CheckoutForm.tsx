'use client'

import React, { forwardRef } from 'react'
import LogoHeader from '@/assets/logo-header.png'
import { Input } from '@/components/ui/input'
import { CustomSelect } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { CustomImage } from '@/components/CustomImage/CustomImage'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { masks } from '@/helpers/Mask'

const monthValidationSchema = z.string().refine((value) => {
  const month = Number(value)
  return month > 0 && month <= 31
}, 'Maximo 31')

const minYear = new Date().getFullYear().toString().slice(-2)

const yearValidationSchema = (minYear: number) =>
  z.string().refine((value) => {
    const year = Number(value)
    return year > minYear
  }, `Mínimo ${minYear}`)

const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  phone: z.string().refine((value) => /^\(\d{2}\) \d{4,5}-\d{4}$/.test(value), {
    message:
      'Phone number must be in the format (XX) XXXX-XXXX or (XX) XXXXX-XXXX.',
  }),
  cpf: z
    .string()
    .min(11, 'CPF inválido')
    .transform((value) => masks.cpf(value)),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
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

export const CheckoutForm = forwardRef<HTMLDivElement>((props, ref) => {
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div ref={ref} className="mx-auto max-w-[572px] px-8">
      <div className="flex justify-start pb-6 pt-40">
        <CustomImage
          src={LogoHeader}
          alt="logo header"
          width={329}
          height={62}
        />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-2 md:grid-cols-2"
        >
          <div className="col-span-2 flex flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-primary">Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-1 flex flex-col">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-primary">
                    Telefone
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(xx) xxxxx-xxxx"
                      mask="phone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-1 flex flex-col">
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-primary">CPF</FormLabel>
                  <FormControl>
                    <Input placeholder="" mask="cpf" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-primary">
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" mask="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-primary">
                    Número do Cartão
                  </FormLabel>
                  <FormControl>
                    <Input
                      maxLength={19}
                      placeholder=""
                      mask="creditCard"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-1 flex flex-col">
            <label className="font-bold text-primary">Data de validade</label>
            <div className="dateDiviser">
              <FormField
                control={form.control}
                name="monthValidate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        maxLength={2}
                        placeholder="10"
                        className="max-w-[53px] p-0 text-center placeholder:text-center sm:max-w-[85px]"
                        // mask="day"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="yearValidate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="29"
                        className="max-w-[53px] p-0 text-center placeholder:text-center sm:max-w-[85px]"
                        maxLength={2}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="col-span-1 flex flex-col">
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-primary">
                    CVC/CVV
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" maxLength={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <FormField
              control={form.control}
              name="shares"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <CustomSelect {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-2 mt-8 flex w-full flex-col items-center gap-2 sm:flex-row-reverse sm:gap-8 md:col-span-2">
            <Button type="submit">Prosseguir</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => console.log('Voltar')}
            >
              Voltar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
})

CheckoutForm.displayName = 'CheckoutForm'
