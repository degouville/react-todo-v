import { v4 as id } from 'uuid'
import { useState, useEffect } from 'react'
import todoService from '../features/todo/lib/todoStorage'
import { ITodo, FormFields } from '@/types'

const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const todos = todoService.fetchTodos()
    setTodos(todos)
  }, [])
  useEffect(() => todoService.persistTodos(todos), [todos])

  const addTodo = (todo: FormFields) => {
    setTodos([...todos, { ...todo, id: id(), isComplete: false }])
  }

  const toggleTodo = (id: string) => {
    const toggleById = (todo: ITodo) => todo.id === id
      ? { ...todo, isComplete: !todo.isComplete }
      : todo
    const toggledTodos = todos.map(toggleById)
    setTodos(toggledTodos)
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return { todos, addTodo, toggleTodo, deleteTodo }
}

export default useTodos