import React from 'react'

import { Stack } from '@/components/Stack/Stack'
import { Button } from '@/components/ui/button'
import { CustomImage } from '@/components/CustomImage/CustomImage'
import LogoHeader from '@/assets/logo-header.png'
// import Success from '@/assets/success.svg'
import { Title } from '@/components/Typography/Typography'
import { SuccessIcon } from '@/components/CustomIcon/Icon'
// import { CustomIcon } from '@/components/CustomIcon/Icon'

export default async function Success() {
  return (
    <Stack
      as="main"
      className="relative overflow-y-auto bg-white md:flex md:flex-row md:justify-between"
    >
      <div className="mx-auto flex h-[1000px] flex-col items-center px-8 md:w-[572px] md:px-0">
        <div className="flex w-full items-center justify-center pb-10 pt-12 lg:pt-40">
          <CustomImage
            src={LogoHeader}
            alt="logo header"
            width={329}
            height={62}
          />
          {/* <CustomIcon icon={Success} /> */}
        </div>
        <div className="flex h-[171px] w-[171px] items-center justify-center rounded-full bg-gray100 p-8">
          <SuccessIcon />
        </div>
        <Title
          text="Parabéns!"
          className="mt-8 w-full text-center text-4xl text-primary"
        />
        <Title
          text="Você compensou suas emissões com sucesso!"
          as="h2"
          className="mt-2 w-full text-center text-xl text-primary"
        />
        <p className="mt-6 text-sm">
          Com essa ação você contribui para um mundo mais sustentável
        </p>
        <p className="mt-3 text-sm">
          Um email com o certificado de compensação será enviado para você em
          breve
        </p>
        <Button className="mt-14 w-full">Compartilhar</Button>
      </div>

      {/* <CheckoutForm /> */}
      {/* <Summary /> */}
    </Stack>
  )
}