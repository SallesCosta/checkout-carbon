import { cn } from '@/lib/utils'
import { masks } from '@/hooks/useCredPrice/Mask'
import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'
import { Stack } from '@/components/Stack/Stack'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  mask?: 'phone' | 'cpf' | 'creditCard'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = 'text', label, placeholder, mask, onChange, ...props },
    ref,
  ) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      if (mask && masks[mask]) {
        event.target.value = masks[mask](value)
      }
      if (onChange) {
        onChange(event)
      }
    }

    return (
      <Stack dir="col">
        <input
          name={label}
          type={type}
          placeholder={placeholder}
          className={cn(
            'border-input h-8 rounded-full pl-3' +
              ' bg-[#f4f4f4] focus:border-primary focus:outline-none' +
              ' focus:ring-2 focus:ring-primary',
            className,
          )}
          ref={ref}
          onChange={handleChange}
          {...props}
        />
      </Stack>
    )
  },
)
Input.displayName = 'Input'

export { Input }
