import { ChangeEvent, FC, TextareaHTMLAttributes } from 'react'
import styles from './styles/FormTextarea.module.styl'


interface IFormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const FormTextarea: FC<IFormTextareaProps> = ({ onChange, ...props }) => (
  <textarea
    className={styles.textarea}
    onChange={onChange}
    rows={2}
    {...props}
  />
)


export default FormTextarea