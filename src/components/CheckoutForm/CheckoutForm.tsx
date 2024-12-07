'use client'
import React from 'react'
import { CustomImage } from '@/components/CustomImage/CustomImage'
import LogoHeader from '@/assets/logo-header.png'
import { Input } from '@/components/ui/input'

export const CheckoutForm = () => {
  const newDate = new Date()
  const year = newDate.getFullYear().toString().slice(-2)

  return (
    <div>
      <div className="flex h-[157px] items-center justify-center">
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

        <div className="col-span-1 flex flex-col md:col-span-2">
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
        <div className="col-span-1 flex flex-col md:col-span-2">
          <label className="font-bold text-primary">Data de validade</label>
          <div className="dateDiviser">
            <Input
              maxLength={2}
              max={31}
              placeholder="10"
              className="max-w-[53px] border-blue-500"
              mask="day"
            />
            <Input
              placeholder="29"
              className="max-w-[53px] border-blue-500"
              maxLength={2}
              min={year}
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col md:col-span-2">
          <Input label="CVC/CVV" placeholder="" maxLength={3} />
        </div>
        <div className="col-span-2 flex flex-col">
          <label htmlFor="phone" className="mb-1 font-medium">
            Opções de Parcelamento
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            className="rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="col-span-2 flex justify-center md:col-span-2">
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Prosseguir
          </button>
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  )
}
