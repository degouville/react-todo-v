import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem 
        key={todo.id}
        todo={todo} 
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo} 
      />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList