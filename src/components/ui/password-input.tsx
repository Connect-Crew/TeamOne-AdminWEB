import * as React from 'react'

import { Input } from './input'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false)

    return (
      <Input
        suffix={
          showPassword ? (
            <EyeIcon onClick={() => setShowPassword(false)} />
          ) : (
            <EyeOffIcon onClick={() => setShowPassword(true)} />
          )
        }
        type={showPassword ? 'text' : 'password'}
        className={className}
        ref={ref}
        {...props}
      />
    )
  }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
