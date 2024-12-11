'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { cn } from '@/lib/utils'
import { ChevronUpIcon } from '@radix-ui/react-icons'
import { ChevronDown } from '@/components/Icons/Icons'

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'border-input relative z-10 flex h-9 w-full items-center' +
        ' justify-between whitespace-nowrap rounded-md border bg-transparent' +
        ' px-3 py-2 text-sm shadow-sm ring-offset-background' +
        ' focus:outline-none focus:ring-1 focus:ring-ring' +
        ' disabled:cursor-not-allowed disabled:opacity-50' +
        ' cursor-pointer [&>span]:line-clamp-1 [&>span]:text-black' +
        ' [&>span]:pointer',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <ChevronUpIcon className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'text-popover-foreground relative z-0 -ml-[2px] -mt-6' +
          ' bg-gray100 pt-7' +
          ' max-h-96' +
          ' overflow-hidden rounded-b-3xl border-b-2 border-l-2 border-r-2 border-primary shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] font-medium leading-4',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold', className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'focus:bg-accent text-bold focus:text-accent-foreground cursor-pointer' +
        ' relative flex w-full' +
        ' cursor-default select-none items-center rounded-sm py-0.5 pl-2 pr-8 font-medium outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'hover:bg-secondary duration-400 transition-all hover:translate-x-1' +
        ' hover:text-primary',
      className,
    )}
    {...props}
  >
    <SelectPrimitive.ItemText className="text-black">
      {children}
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('bg-muted -mx-1 my-1 h-px', className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
}

const options = [
  '1x R$ 300',
  '2x R$ 150',
  '3x R$ 100',
  '4x R$ 75',
  '5x R$ 60',
  '6x R$ 50',
  '7x R$ 42,86',
  '8x R$ 37,05',
  '9x R$ 33,33',
  '10x R$ 30',
  '11x R$ 27,27',
  '12x R$ 25',
]

export const CustomSelect = React.forwardRef<
  HTMLDivElement,
  {
    value: string
    onChange: (value: string) => void
  }
>(({ value, onChange }, ref) => {
  return (
    <div ref={ref}>
      <Select value={value} onValueChange={onChange}>
        <label className="font-bold text-primary">Opções de Parcelamento</label>
        <SelectTrigger className="placeholder:text-muted-foreground h-8 rounded-full bg-[#f4f4f4] pl-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary data-[state=open]:ring-2 data-[state=open]:ring-primary">
          <SelectValue placeholder="Selecionar" />
        </SelectTrigger>
        <SelectContent className="rounded-b-3xl border-b-2 border-l-2 border-r-2 border-primary bg-[#f4f4f4] focus:outline-none">
          <SelectGroup>
            {options.map((i, index) => (
              <SelectItem key={index} value={i}>
                {i}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
})

CustomSelect.displayName = 'CustomSelect'
