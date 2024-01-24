import { ButtonHTMLAttributes } from 'react'
import { StyledComponent } from 'styled-components'

declare module 'ButtonStyles' {
  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

  const ButtonWrapper: StyledComponent<'button', any, ButtonProps>

  export default ButtonWrapper
}
