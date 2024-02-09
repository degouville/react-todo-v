import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react-hooks/dom'
import useTodos from '../useTodo'
import todoService from '../../features/todo/lib/todoStorage'

const mockTodos = [
  { id: '1', title: 'Test Todo 1', description: 'Description 1', priority: 'low', isComplete: false },
  { id: '2', title: 'Test Todo 2', description: 'Description 2', priority: 'medium', isComplete: true }
]

vi.mock('../../features/todo/lib/todoStorage', () => ({
  default: {
    fetchTodos: vi.fn(() => mockTodos),
    persistTodos: vi.fn()
  }
}))

describe('useTodos', () => {

  beforeEach(() => {
    vi.mocked(todoService.fetchTodos).mockClear()
    vi.mocked(todoService.persistTodos).mockClear()
    vi.mocked(todoService.fetchTodos).mockReturnValue(mockTodos)
  })

  it('initializes with todos from storage', () => {
    const { result } = renderHook(() => useTodos())
    expect(result.current.todos).toEqual(mockTodos)
  })

  it('adds a new todo', () => {
    const { result } = renderHook(() => useTodos())
    act(() => {
      result.current.addTodo({
        title: 'New Todo',
        description: 'New Description',
        priority: 'high'
      })
    })
    expect(result.current.todos).toHaveLength(3)
    expect(todoService.persistTodos).toHaveBeenCalled()
  })

  it('toggles a todo completion status', () => {
    const { result } = renderHook(() => useTodos())
    act(() => {
      result.current.toggleTodo('1')
    })
    expect(result.current.todos[0].isComplete).toBe(true)
    expect(todoService.persistTodos).toHaveBeenCalled()
  })

  it('deletes a todo', () => {
    const { result } = renderHook(() => useTodos())
    act(() => {
      result.current.deleteTodo('1')
    })
    expect(result.current.todos).toHaveLength(1)
    expect(todoService.persistTodos).toHaveBeenCalled()
  })
})
