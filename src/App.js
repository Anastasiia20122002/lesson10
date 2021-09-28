import { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput, textInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(1,3),
        task: userInput,
        textarea: textInput
      }
      setTodos([...todos, newItem])
    }
  }
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }
  return (
    <div className="App">
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            removeTask={removeTask}
            />
        )
      })}
    </div>
  );
}

export default App;