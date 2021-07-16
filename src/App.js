import React from "react"
import TodoItem from "./TodoItem"
function App() {
  return (
    <div className="todo-list">
      <h1>To do List</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default App
