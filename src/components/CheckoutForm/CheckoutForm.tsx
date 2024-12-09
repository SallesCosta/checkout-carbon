'use client'
import React from 'react'
import { CustomImage } from '@/components/CustomImage/CustomImage'
import LogoHeader from '@/assets/logo-header.png'
import { Input } from '@/components/ui/input'
import { CustomSelect } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export const CheckoutForm = () => {
  const newDate = new Date()
  const year = newDate.getFullYear().toString().slice(-2)

  return (
    <div className="mx-auto max-w-[572px]">
      <div className="flex items-center justify-center py-12">
        <CustomImage
          src={LogoHeader}
          alt="logo header"
          width={329}
          height={62}
        />
      </div>

      <form className="grid grid-cols-2 gap-4 px-8 md:grid-cols-2">
        <div className="col-span-2 flex flex-col">
          <Input label="Nome" placeholder="" />
        </div>
        <div className="col-span-1 flex flex-col">
          <Input label="Telefone" placeholder="" mask="phone" />
        </div>

        <div className="col-span-1 flex flex-col">
          <Input label="CPF" placeholder="" mask="cpf" />
        </div>

        <div className="col-span-2 flex flex-col">
          <Input label="E-mail" placeholder="" mask="email" />
        </div>
        <div className="col-span-2 flex flex-col">
          <Input
            maxLength={19}
            label="Numero de Cartão"
            placeholder=""
            mask="creditCard"
          />
        </div>
        <div className="col-span-1 flex flex-col">
          <label className="font-bold text-primary">Data de validade</label>
          <div className="dateDiviser">
            <Input
              maxLength={2}
              max={31}
              placeholder="10"
              className="max-w-[53px] p-0 text-center placeholder:text-center sm:max-w-[85px]"
              mask="day"
            />
            <Input
              placeholder="29"
              className="max-w-[53px] p-0 text-center placeholder:text-center sm:max-w-[85px]"
              maxLength={2}
              min={year}
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col">
          <Input label="CVC/CVV" placeholder="" maxLength={3} />
        </div>
        <div className="col-span-2 flex flex-col">
          <CustomSelect />
        </div>
        <div className="col-span-2 mt-8 flex w-full flex-col items-center gap-2 sm:flex-row-reverse sm:gap-8 md:col-span-2">
          <Button type="submit">Prosseguir</Button>
          <Button type="submit" variant="outline">
            Voltar
          </Button>
        </div>
      </form>
    </div>
  )
}
