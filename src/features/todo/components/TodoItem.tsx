import React from 'react'
import { ITodo } from '@/types'
import trashcan from '@/assets/trashcan.svg'
import styles from './styles/TodoItem.module.styl'


const priorityMap = {
  'low': { color: 'blue', text: '!' },
  'medium': { color: 'orange', text: '!!' },
  'high': { color: 'red', text: '!!!' },
}

const PriorityTag = ({ priority }: { priority: ITodo['priority'] }) => {
  const { color, text } = priorityMap[priority || 'low']
  return <span style={{ color }}>{text}</span>
}


interface TodoItemProps {
  todo: ITodo,
  toggleTodo: (id: string) => void,
  deleteTodo: (id: string) => void
}


const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  const { id, title, priority, description, isComplete } = todo

  return (
    <li key={id} className={styles.item}>
      <section onClick={() => toggleTodo(id)} className={isComplete ? styles.isComplete : ''} >
        <p className={styles.title}>
          {priority && <PriorityTag priority={priority} />}
          {title}
        </p>
        {description && <p className={styles.description}>{description}</p>}
      </section>

      <button onClick={() => deleteTodo(id)} className={styles.button}>
        <img 
          className={styles.trashcan}
          src={trashcan}
          alt="trashcan"
        />
      </button>
    </li>
  )
}

export default TodoItem
