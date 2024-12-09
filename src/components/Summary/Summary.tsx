import React from 'react'
import { CustomImage } from '@/components/CustomImage/CustomImage'
import LogoFooter from '@/assets/logo-footer.png'
import { Title, Text } from '@/components/Typography/Typography'
import { Stack } from '@/components/Stack/Stack'

export const Summary = () => {
  return (
  <div className="fixed bottom-0 z-50 flex h-[162px] w-full flex-col items-center justify-center gap-3 rounded-t-2xl bg-white  shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
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
      </div>)
}
