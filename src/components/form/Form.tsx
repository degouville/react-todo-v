import { FC, FormEvent, ReactNode } from 'react'
import styles from './styles/Form.module.styl'


interface FormProps {
  children: ReactNode,
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const Form: FC<FormProps> = ({ children, onSubmit, ...prop }) => (
  <form className={styles.form} onSubmit={onSubmit} {...prop}>
    {children}
  </form>
)


export default Form
