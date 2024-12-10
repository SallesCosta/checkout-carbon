import React from 'react'

import { Stack } from '@/components/Stack/Stack'
import { Button } from '@/components/ui/button'
import { CustomImage } from '@/components/CustomImage/CustomImage'
import LogoHeader from '@/assets/logo-header.png'
import { Title } from '@/components/Typography/Typography'
import { FailIcon } from '@/components/CustomIcon/Icon'

export default async function Success() {
  return (
    <Stack
      as="main"
      className="relative min-h-[100dvh] overflow-y-auto bg-white md:flex md:flex-row md:justify-between"
    >
      <div className="mx-auto flex h-[1000px] flex-col items-center px-8 md:w-[463px] md:w-[572px] md:items-start md:px-0 md:pl-4">
        <div className="flex w-full items-center justify-center pb-10 pt-12 md:w-auto md:pb-[170px] md:pt-[141px] lg:pl-0 lg:pt-40">
          <CustomImage
            src={LogoHeader}
            alt="logo header"
            width={329}
            height={62}
          />
        </div>
        <div className="flex h-[171px] w-[171px] items-center justify-center rounded-full bg-gray100 p-8 md:hidden">
          <FailIcon />
        </div>
        <Title
          text="Desculpe"
          className="mt-8 w-full text-center text-4xl text-destructive md:text-start"
        />
        <Title
          text="Ocorreu um erro inesperado"
          as="h2"
          className="mt-2 w-full text-center text-xl text-destructive md:text-start"
        />
        <div className="mt-10 px-6 md:px-0">
          <p className="text-sm">Verifique as informações do seu cartão</p>
          <p className="mt-3 text-sm">
            Se o problema persiste, contate-se com o seu banco
          </p>
        </div>
        <Button className="mt-20 w-full md:w-[285px]">Tentar novamente</Button>
      </div>
      <div className="mx-auto hidden h-[1000px] items-center justify-center px-8 sm:flex">
        <div className="items-center justify-center rounded-full bg-gray100 p-8 sm:flex md:h-[350px] md:w-[350px] lg:h-[544px] lg:w-[544px]">
          <FailIcon />
        </div>
      </div>
    </Stack>
  )
}
