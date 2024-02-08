import PropTypes from 'prop-types'

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => (
  <li
    key={todo.id} 
    onClick={() => toggleTodo(todo.id)}
  >
    <p style={{ textDecoration: todo.completed === true ? 'line-through' : 'none' }}>
      {todo.todoText}
    </p>
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
  </li>
)

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    todoText: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoItem