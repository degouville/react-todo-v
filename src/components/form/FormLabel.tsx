import { FC, LabelHTMLAttributes, ReactNode } from 'react'
import styles from './styles/FormLabel.module.styl'


interface IFormLabel extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

const FormLabel: FC<IFormLabel> = ({ children, ...props }) => (
  <label className={styles.label} {...props}>
    {children}
  </label>
)


export default FormLabel