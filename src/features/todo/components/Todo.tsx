import { FC } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import useTodo from '@/hooks/useTodo'
import { ITodo } from '@/types'

interface ITodoProps {
  allowDescription?: boolean,
  allowPriority?: boolean,
}

const Todo: FC<ITodoProps> = ({ allowPriority, allowDescription }) => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodo()

  const initValues: ITodo = {
    id: '',
    title: '',
    description: '',
    priority: null,
    isComplete: false
  }

  return (
    <>
      <TodoForm
        initValues={initValues}
        addTodo={addTodo}
        allowDescription={allowDescription}
        allowPriority={allowPriority}
      />
      {todos && <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />}
    </>
  )
}

export default Todo
