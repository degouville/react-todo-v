import { v4 as id } from 'uuid'

const storageHelper = {
  get: key => JSON.parse(localStorage.getItem(key)),
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value))
}


const fetchTodos = async () => {
  return await storageHelper.get('todos') || []
}

const toggleTodo = async (id) => {
  const todos = await fetchTodos()
  const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
  await storageHelper.set('todos', updatedTodos)
}

const addTodo = async (todo) => {
  const todos = await fetchTodos()
  const newTodo = { ...todo, id: id() }
  await storageHelper.set('todos', [...todos, newTodo])
  return newTodo
}

const deleteTodo = async (id) => {
  const todos = await fetchTodos()
  const updatedTodos = todos.filter(todo => todo.id !== id)
  await storageHelper.set('todos', updatedTodos)
}

export default { fetchTodos, addTodo, toggleTodo, deleteTodo }