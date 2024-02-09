import { FC } from'react'
import TodoItem from './TodoItem'
import { ITodo } from '@/types'
import styles from './styles/TodoList.module.styl'


interface TodoListProps {
  todos: ITodo[]
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

const TodoList: FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => (
  <ul className={styles.list}>
    {todos.map(todo => (
      <TodoItem 
        key={`todo-item-${todo.id}`}
        todo={todo} 
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo} 
      />
    ))}
  </ul>
)


export default TodoList