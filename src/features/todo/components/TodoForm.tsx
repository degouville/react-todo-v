import { FC, useState, useRef, FormEvent } from 'react'
import FormLabel from '@/components/form/FormLabel'
import FormInput from '@/components/form/FormInput'
import FormTextarea from '@/components/form/FormTextarea'
import FormSelect from '@/components/form/FormSelect'
import { ITodo } from '@/types'
import styles from './styles/TodoForm.module.styl'


interface TodoFormProps {
  initValues: ITodo,
  allowPriority?: boolean,
  allowDescription?: boolean,
  addTodo: (todo: ITodo) => void
}

const TodoForm: FC<TodoFormProps> = ({ initValues, addTodo, allowDescription, allowPriority }) => {
  const [values, setValues] = useState<ITodo>(initValues)
  const titleInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget
    setValues(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    addTodo(values)
    setValues(initValues)
    titleInputRef.current?.focus()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormLabel>
        Title:
        <FormInput
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          $ref={titleInputRef}
          required 
        />
      </FormLabel>
      {allowDescription && (
        <FormLabel className={styles.column}>
          Description:
          <FormTextarea
            name="description"
            value={values.description || ''}
            onChange={handleChange}
          />
        </FormLabel>
      )}
      {allowPriority && (
        <FormLabel>
          Priority:
          <FormSelect
            name="priority"
            value={values.priority || ''} 
            onChange={handleChange}
          >
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </FormSelect>
        </FormLabel>
      )}
      <button type="submit" disabled={!values.title}>Add Todo</button>
    </form>
  )
}

export default TodoForm