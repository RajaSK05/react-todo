import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/todoList/todoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1 className='title'>Todo List</h1>
      {/* <NewTodo /> */}
      <TodoList />
    </div>
  )
}

export default App
