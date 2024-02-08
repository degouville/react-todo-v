import { useState, useEffect } from 'react'
import todoService from '../lib/todoObjectStorage'

const todoFormField = ['todoText', 'name', 'description', 'priority']

const useTodos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await todoService.fetchTodos()
      setTodos(todos)
    }
    fetchTodos()
  }, [])

  const addTodo = async (todo) => {
    const completed = false
    const newTodo = await todoService.addTodo({ ...todo, completed })
    setTodos([...todos, newTodo])
  }

  const toggleTodo = async (id) => {
    const toggledTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    setTodos(toggledTodos)
    await todoService.toggleTodo(id)
  }

  const deleteTodo = async (id) => {
    await todoService.deleteTodo(id)
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return { todos, todoFormField, addTodo, toggleTodo, deleteTodo }
}

export default useTodos