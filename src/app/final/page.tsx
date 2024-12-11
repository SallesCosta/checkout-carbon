import { Stack } from '@/components/Stack/Stack'
import { CustomImage } from '@/components/CustomImage/CustomImage'
import LogoHeader from '@/assets/logo-header.png'
import { Title } from '@/components/Typography/Typography'
import { EcoIcon, FailIcon, SuccessIcon } from '@/components/Icons/Icons'
import { RedirectButton } from '@/components/RedirectButton/RedirectButton'

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { status?: string }
}) {
  const isSuccess = searchParams.status === 'success'

  const successCase = {
    title: 'Parabéns!',
    subTitle: 'Você compensou suas emissões com sucesso!',
    messageA: 'Com essa ação você contribui para um mundo mais sustentável',
    messageB:
      'Um email com o certificado de compensação será enviado para' +
      ' você em breve',
    buttonText: 'Compartilhar',
    buttonAction: <RedirectButton path="https://x.com" text="Compartilhar" />,
    icon: <EcoIcon />,
  }

  const failCase = {
    title: 'Desculpe',
    subTitle: 'ocorreu um erro inesperado',
    messageA: 'Verifique as informações do seu cartão',
    messageB: 'Se o problema persiste, contate-se com o seu banco',
    buttonText: 'Tentar novamente',
    buttonAction: <RedirectButton path="/" text="Tentar novamente" />,
    icon: <FailIcon />,
  }

  const data = isSuccess ? successCase : failCase

  return (
    <Stack
      as="main"
      className="relative overflow-y-auto bg-white md:flex md:flex-row md:justify-between"
    >
      <div className="mx-auto flex h-dvh flex-col items-center px-8 md:w-[463px] md:w-[572px] md:items-start md:px-0 md:pl-4">
        <div className="flex w-full items-center justify-center pb-10 pt-12 md:w-auto md:pb-[150px] md:pt-[141px] lg:pl-0 lg:pt-40">
          <CustomImage
            src={LogoHeader}
            alt="logo header"
            width={329}
            height={62}
          />
        </div>
        <div className="flex h-[171px] w-[171px] items-center justify-center rounded-full bg-gray100 p-8 md:hidden">
          <SuccessIcon />
        </div>
        <Title
          text={data.title}
          className="mt-8 w-full text-center text-4xl text-primary data-[status=false]:text-destructive md:text-start lg:text-5xl"
          data-status={isSuccess}
        />
        <Title
          text={data.subTitle}
          as="h2"
          data-status={isSuccess}
          className="mt-2 w-full text-center text-xl text-primary data-[status=false]:text-destructive md:text-start lg:text-3xl"
        />
        <div className="px-8 md:px-0">
          <p className="mt-6 text-sm md:text-xl">{data.messageA}</p>
          <p className="mt-3 text-sm md:text-xl">{data.messageB}</p>
        </div>
        {data.buttonAction}
      </div>
      <div className="mx-auto hidden items-center justify-center sm:flex">
        <div className="items-center justify-center rounded-full bg-gray100 p-8 sm:flex md:h-[350px] md:w-[350px] md:p-0 lg:h-[544px] lg:w-[544px]">
          {data.icon}
        </div>
      </div>
    </Stack>
  )
}
