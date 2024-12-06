import React from 'react'
import { CustomImage } from '@/components/CustomImage/CustomImage'
import LogoFooter from '@/assets/logo-footer.png'
import { Title, Text } from '@/components/Typography/Typography'
import { Stack } from '@/components/Stack/Stack'

export const Summary = () => {
  return (
    <div className="absolute bottom-0 flex h-[162px] w-full flex-col items-center justify-center gap-3 rounded-t-2xl bg-white">
      <Title className="text-primary" text="Resumo de Compra" />
      <div className="flex flex-row gap-3">
        <CustomImage src={LogoFooter} alt="logo" width={53} height={53} />
        <Stack dir="col" className="max-w-[120px]">
          <Text
            text="Compensação de emissões"
            className="text-base leading-4"
          />
          <Text as="b" text="R$: 300" className="text-2xl" />
        </Stack>
      </div>
    </div>
  )
}
