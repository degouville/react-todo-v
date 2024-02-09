import { FC, ReactNode, SelectHTMLAttributes } from 'react'
import styles from './styles/FormSelect.module.styl'


interface IFormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode
}

const FormSelect: FC<IFormSelectProps> = ({ children, onChange, ...props }) => (
  <select
    className={styles.select}
    onChange={onChange}
    {...props}
  >
    {children}
  </select>
)


export default FormSelect