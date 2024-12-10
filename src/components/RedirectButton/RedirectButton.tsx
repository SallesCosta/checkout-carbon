'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRedirect } from '@/helpers/useRedirect/useRedirect'

export const RedirectButton = ({
  path,
  text,
}: {
  path: string
  text: string
}) => {
  const { redirect } = useRedirect()
  return (
    <Button className="mt-14 w-full" onClick={() => redirect(path)}>
      {text}
    </Button>
  )
}
