'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'

export function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <Dialog open={isLoading}>
      <DialogContent className="flex items-center justify-center bg-transparent shadow-none">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin"
        >
          <path
            d="M13 50.5C13 29.7893 29.7893 13 50.5 13C71.2107 13 88 29.7893 88 50.5C88 71.2107 71.2107 88 50.5 88C29.7893 88 13 71.2107 13 50.5ZM79.0744 50.5C79.0744 34.7188 66.2812 21.9256 50.5 21.9256C34.7188 21.9256 21.9256 34.7188 21.9256 50.5C21.9256 66.2812 34.7188 79.0744 50.5 79.0744C66.2812 79.0744 79.0744 66.2812 79.0744 50.5Z"
            fill="url(#paint0_angular_2_487)"
          />
          <defs>
            <linearGradient
              id="paint0_angular_2_487"
              gradientUnits="userSpaceOnUse"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop stopColor="#00A19D" offset="0%" />
              <stop stopColor="#C4C4C4" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>
        </svg>
      </DialogContent>
    </Dialog>
  )
}
