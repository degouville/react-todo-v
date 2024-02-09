import './styles/App.styl'
import '@fontsource/geist-sans'
import Todo from '@/todo/components/Todo'

const App = () => {
  return (
    <main>
      <h1>Todo List</h1>
      <Todo
        allowDescription
        allowPriority
      />
    </main>
  )
}


export default App
