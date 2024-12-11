'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { Spinner } from '@/components/Icons/Icons'

export function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <Dialog open={isLoading}>
      <DialogTitle />
      <DialogDescription />
      <DialogContent className="flex items-center justify-center bg-transparent shadow-none">
        <Spinner />
      </DialogContent>
    </Dialog>
  )
}
