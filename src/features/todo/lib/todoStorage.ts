import storageHelper from '@/lib/localStorageHelper'
import { ITodo } from '@/types'


export default {
  fetchTodos() {
    return storageHelper.get('todos') || []
  },
  persistTodos(todos: ITodo[]) {
    storageHelper.set('todos', todos)
  }
}