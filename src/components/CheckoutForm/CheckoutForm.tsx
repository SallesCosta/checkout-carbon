'use client'

import React, { forwardRef } from 'react'
import LogoHeader from '@/assets/logo-header.png'
import { Input } from '@/components/ui/input'
import { CustomSelect } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { CustomImage } from '@/components/CustomImage/CustomImage'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useFormValidation } from '@/hooks/useFormValidation/useFormValidation'
import { Loader } from '@/components/Loader/Loader'

export const CheckoutForm = forwardRef<HTMLDivElement>((_, ref) => {
  const { form, onSubmit, isSubmitDisabled, isSending } = useFormValidation()
  return (
    <div ref={ref} className="mx-auto h-[1000px] px-8 md:w-[572px] md:px-0">
      <div className="flex justify-start pb-6 pt-12 lg:pt-40">
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
                      className="md:w-[302px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-1 flex flex-col md:items-end">
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-primary">CPF</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      mask="cpf"
                      className="md:w-[230px]"
                      {...field}
                    />
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
                    <Input placeholder="" {...field} />
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
                        placeholder="MM"
                        className="max-w-[53px] p-0 text-center placeholder:text-center sm:max-w-[85px]"
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
                        placeholder="AA"
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

          <div className="col-span-1 flex flex-col items-end">
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-primary">
                    CVC/CVV
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      maxLength={3}
                      className="md:w-[230px]"
                      {...field}
                    />
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
            <Button type="submit" disabled={isSubmitDisabled}>
              Prosseguir
            </Button>
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
      <Loader isLoading={isSending} />
    </div>
  )
})

CheckoutForm.displayName = 'CheckoutForm'
