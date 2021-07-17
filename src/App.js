import React, { Component } from "react"
import TodoItem from "./TodoItem"

class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: [],
    }
  }
  render() {
    return (
      <div className="todo-list">
        <h1>To do List</h1>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    )
  }
}

export default App
