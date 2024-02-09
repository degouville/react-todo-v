import { ChangeEvent, FC, ForwardedRef, InputHTMLAttributes } from 'react'
import styles from './styles/FormInput.module.styl'


interface IFormInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  $ref: ForwardedRef<HTMLInputElement>
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const FormInput: FC<IFormInputTextProps> = ({ onChange, $ref, ...props }) => (
  <input
    className={styles.input}
    onChange={onChange}
    ref={$ref}
    {...props}
  />
)


export default FormInput