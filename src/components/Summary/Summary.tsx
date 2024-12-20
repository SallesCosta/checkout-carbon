'use client'

import React from 'react'
import { CustomImage } from '@/components/CustomImage/CustomImage'
import LogoFooter from '@/assets/logo-footer.png'
import Card from '@/assets/Card.png'
import { Title, Text } from '@/components/Typography/Typography'
import { Stack } from '@/components/Stack/Stack'
import { useResponsive } from '@/hooks/useResponsive/useResponsive'
import { useCredPrice } from '@/hooks/useCredPrice/useCredPrice'
import { Loader } from '@/components/Loader/Loader'
import { useCustomParams } from '@/hooks/useCustomParams/useCustomParams'
import { Skeleton } from '@/components/ui/skeleton'

export const Summary = () => {
  const { isLessThanTablet } = useResponsive()
  const { data, isFetching } = useCredPrice(3)
  const { getParams } = useCustomParams()
  const creditPriceId = getParams('cred')
  const value = `R$: ${data * +creditPriceId}`

  return (
    <>
      <SummaryComponent
        isFooter={isLessThanTablet}
        value={value}
        isFetching={isFetching}
      />
      <Loader isLoading={isFetching} />
    </>
  )
}

const SummaryComponent = ({
  isFooter,
  value,
  isFetching,
}: {
  isFooter: boolean
  value: string
  isFetching: boolean
}) => {
  const Value = () => {
    return isFetching ? (
      <Skeleton className="h-7 w-20" />
    ) : (
      <Text as="b" text={value} className="text-2xl" />
    )
  }

  return isFooter ? (
    <div className="fixed bottom-0 z-50 flex h-[162px] w-full flex-col items-center justify-center gap-3 rounded-t-2xl bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <Title className="text-primary" text="Resumo de Compra" />
      <div className="flex flex-row gap-3">
        <CustomImage src={LogoFooter} alt="logo" width={53} height={53} />
        <Stack dir="col" className="max-w-[120px]">
          <Text
            text="Compensação de emissões"
            className="text-base leading-4"
          />
          <Value />
        </Stack>
      </div>
    </div>
  ) : (
    <div className="flex w-1/3 max-w-[688] flex-col items-center justify-center gap-12 border-2 border-l-gray100 px-4">
      <CustomImage src={Card} alt="card image" />
      <div className="w-full max-w-[440px]">
        <Title
          className="w-full text-center text-primary"
          text="Resumo de Compra"
        />
        <div className="flex h-40 flex-row items-center justify-center gap-3 rounded-2xl shadow-default">
          <CustomImage src={LogoFooter} alt="logo" width={82} height={82} />
          <Stack dir="col" className="max-w-[120px]">
            <Text
              text="Compensação de emissões"
              className="text-base leading-4"
            />
            <Value />
          </Stack>
        </div>
      </div>
    </div>
  )
}
