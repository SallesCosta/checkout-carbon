'use client'

import { ComponentPropsWithoutRef } from 'react'

import { Stack } from '@/components/Stack/Stack'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  icon: 'Mail' | 'Github' | 'Linkedin' | 'Phone'
}

export const CustomIcon = ({ icon, ...props }: IconProps) => {
  const Comp = {
    Mail,
    Github,
    Linkedin,
    Phone,
  }[icon]

  return <Comp {...props} />
}

export const ClientWrapper = () => {
  return (
    <Stack className="gap-2">
      <CustomIcon icon="Mail" strokeWidth={1.75} />
      <CustomIcon icon="Github" strokeWidth={1.75} />
      <CustomIcon icon="Linkedin" strokeWidth={1.75} />
      <CustomIcon icon="Phone" strokeWidth={1.75} />
    </Stack>
  )
}

export const ChevronDown = () => {
  return (
    <svg
      width="11"
      height="8"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 1H1.55765C0.64734 1 0.210471 2.11736 0.879371 2.7348L4.82172 6.3739C5.20478 6.72749 5.79522 6.72749 6.17828 6.3739L10.1206 2.7348C10.7895 2.11736 10.3527 1 9.44235 1H5.5Z"
        fill="#979797"
        stroke="#979797"
      />
    </svg>
  )
}

export const SuccessIcon = () => {
  return (
    <svg
      width="300"
      height="230"
      viewBox="0 0 300 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M190.359 80.7285H144.234C141.05 80.7285 138.469 83.3102 138.469 86.4941C138.469 89.678 141.05 92.2597 144.234 92.2597H190.359C193.543 92.2597 196.125 89.678 196.125 86.4941C196.125 83.3102 193.543 80.7285 190.359 80.7285Z"
        fill="#00A19D"
      />
      <path
        d="M236.484 92.2597C239.668 92.2597 242.25 89.678 242.25 86.4941C242.25 83.3102 239.668 80.7285 236.484 80.7285H213.422C210.238 80.7285 207.656 83.3102 207.656 86.4941C207.656 89.678 210.238 92.2597 213.422 92.2597H236.484Z"
        fill="#00A19D"
      />
      <path
        d="M92.3438 86.4941C92.3438 88.023 92.9512 89.4902 94.0322 90.5712C95.1133 91.6522 96.5804 92.2597 98.1093 92.2597H121.172C124.356 92.2597 126.937 89.678 126.937 86.4941C126.937 83.3102 124.356 80.7285 121.172 80.7285H98.1093C94.9254 80.7285 92.3438 83.3102 92.3438 86.4941Z"
        fill="#00A19D"
      />
      <path
        d="M51.9853 92.2597H75.0477C78.2316 92.2597 80.8132 89.678 80.8132 86.4941C80.8132 83.3102 78.2316 80.7285 75.0477 80.7285H51.9853C48.8014 80.7285 46.2197 83.3102 46.2197 86.4941C46.2197 89.678 48.8014 92.2597 51.9853 92.2597Z"
        fill="#00A19D"
      />
      <path
        d="M63.5165 23.0723H86.5788C96.1306 23.0723 103.876 32.624 103.876 40.369V51.9002C103.876 61.452 96.1306 69.197 86.5788 69.197H63.5165C53.9647 69.197 46.2197 59.6452 46.2197 51.9002V40.369C46.2197 30.8173 53.9647 23.0723 63.5165 23.0723Z"
        fill="#00A19D"
      />
      <path
        d="M190.359 103.791C182.869 103.781 175.84 107.41 171.511 113.521C167.179 119.634 166.088 127.466 168.582 134.532C171.073 141.595 176.844 147.008 184.051 149.046C191.259 151.084 199.008 149.496 204.83 144.784C209.368 148.454 215.131 150.269 220.954 149.859C226.776 149.45 232.225 146.848 236.205 142.577C240.184 138.31 242.397 132.691 242.397 126.854C242.397 121.016 240.184 115.397 236.205 111.13C232.225 106.86 226.776 104.257 220.954 103.848C215.132 103.439 209.368 105.253 204.83 108.924C200.73 105.619 195.626 103.809 190.36 103.791L190.359 103.791ZM197.855 135.558C195.78 137.376 193.116 138.379 190.359 138.385C186.239 138.385 182.432 136.187 180.373 132.619C178.314 129.052 178.314 124.655 180.373 121.088C182.432 117.52 186.239 115.322 190.359 115.322C193.116 115.327 195.78 116.331 197.855 118.148C195.548 123.724 195.548 129.983 197.855 135.559V135.558Z"
        fill="#00A19D"
      />
      <path
        d="M282.608 34.6032H265.312V17.3065C265.299 12.7223 263.471 8.33125 260.231 5.09066C256.99 1.85007 252.599 0.0226146 248.015 0.00976562H40.4539C35.8698 0.0226351 31.4787 1.85014 28.2381 5.09066C24.9975 8.33125 23.1701 12.7223 23.1572 17.3065V115.321C23.1572 118.505 25.7389 121.087 28.9228 121.087C32.1067 121.087 34.6884 118.505 34.6884 115.321V17.3065C34.6884 14.1225 37.2701 11.5409 40.454 11.5409H248.015C249.544 11.5409 251.011 12.1483 252.092 13.2294C253.173 14.3104 253.781 15.7776 253.781 17.3065V155.681C253.781 157.209 253.173 158.677 252.092 159.758C251.011 160.839 249.544 161.446 248.015 161.446H121.172C117.988 161.446 115.407 164.028 115.407 167.212C115.407 170.396 117.988 172.977 121.172 172.977H248.015C252.599 172.964 256.99 171.137 260.231 167.896C263.471 164.656 265.299 160.265 265.312 155.681V138.384H288.374V190.274C288.374 191.803 287.767 193.27 286.686 194.351C285.605 195.432 284.137 196.04 282.609 196.04H115.407C112.223 196.04 109.641 198.621 109.641 201.805C109.641 204.989 112.223 207.571 115.407 207.571H282.609C287.193 207.558 291.584 205.73 294.824 202.49C298.065 199.249 299.892 194.858 299.905 190.274V51.9001C299.892 47.316 298.065 42.9249 294.824 39.6843C291.584 36.4437 287.193 34.6163 282.609 34.6034L282.608 34.6032ZM288.374 92.2591H265.312V46.1344H282.608C284.137 46.1344 285.605 46.7418 286.686 47.8229C287.767 48.9039 288.374 50.3711 288.374 51.9V92.2591Z"
        fill="#00A19D"
      />
      <path
        d="M52 126C23.3386 126 0 149.338 0 178C0 206.661 23.3386 230 52 230C80.7126 230 104 206.661 104 178C104 149.338 80.7126 126 52 126ZM83.2205 163.055L46.2677 199.956C45.3465 200.929 44.0158 201.441 42.7874 201.441C41.5591 201.441 40.2795 200.929 39.3071 199.956L20.8307 181.48C18.8858 179.535 18.8858 176.413 20.8307 174.468C22.7756 172.523 25.8976 172.523 27.8425 174.468L42.7874 189.413L76.2087 155.992C78.1535 154.047 81.2756 154.047 83.2205 155.992C85.1654 157.988 85.1654 161.11 83.2205 163.055Z"
        fill="#00A19D"
      />
    </svg>
  )
}
