import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import todoStorage from '../todoStorage'
import { ITodo } from '@/types'

describe('todoStorage', () => {
  let todos: ITodo[]

  beforeEach(() => {
    global.localStorage = (function () {
      let store: Record<string, string> = {}
      return {
        getItem(key) {
          return store[key] || null
        },
        setItem(key, value) {
          store[key] = value.toString()
        },
        clear() {
          store = {}
        },
        removeItem(key) {
          delete store[key]
        },
        get length() {
          return Object.keys(store).length
        },
        key(index) {
          const keys = Object.keys(store)
          return keys[index] || null
        }
      }
    })()

    todos = [
      { id: '1', title: 'Test Todo 1', description: 'Description 1', priority: 'low', isComplete: false },
      { id: '2', title: 'Test Todo 2', description: 'Description 2', priority: 'medium', isComplete: true }
    ]
    global.localStorage.setItem('todos', JSON.stringify(todos))
  })

  afterEach(() => {
    global.localStorage.clear()
  })

  it('fetchTodos should return an array of todos from localStorage', () => {
    const fetchedTodos = todoStorage.fetchTodos()
    expect(fetchedTodos).toEqual(todos)
  })

  it('persistTodos should update todos in localStorage', () => {
    const newTodo: ITodo = { id: '3', title: 'Test Todo 3', description: 'Description 3', priority: 'high', isComplete: false }
    const newTodos = [
      ...todos,
      newTodo
    ]
    todoStorage.persistTodos(newTodos)
    const fetchedTodos = todoStorage.fetchTodos()
    expect(fetchedTodos).toEqual(newTodos)
  })
})