import './App.css'
import Form from './components/form/Form';
import FormInputText from './components/form/FormInputText';
import TodoList from './components/todo/TodoList'
import useForm from './hooks/useForm'
import useTodo from './hooks/useTodo'

const App = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  } = useTodo()

  const { values, handleChange, handleSubmit } = useForm(() => {
    addTodo(values);
  });

  return (
    <main>
      <h1>Todo List</h1>
      <Form handleSubmit={handleSubmit} submitMessage="Add Todo">
        <FormInputText
          name="todoText"
          text={values.todoText || ''}
          onChange={handleChange}
          placeholder="Add todo"
        />
      </Form>
      {todos && <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />}
    </main>
  )
}

export default App
