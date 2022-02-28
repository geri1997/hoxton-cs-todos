import { useState } from 'react'
import AddTodoBtn from './AddTodoBtn'
import './App.css'
import TodoLi from './TodoLi'

export type Todo = {
  id: number
  title: string
}

export function addTodo (todos: Todo[]=[], title: string) {
  const newTodo = { id: todos.length + 1, title: title }
  return [...todos, newTodo]
}

export function removeTodo (todos: Todo[], id: number) {
  return todos.filter(todo => todo.id !== id)
}

export function App () {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <div className='App'>
      <h1>Todo app</h1>

      <AddTodoBtn setTodos={setTodos} addTodo={addTodo} todos={todos}/>

      <ul>
        {todos.map(todo => (
          <TodoLi key={todo.id} todo={todo} removeTodo={removeTodo} setTodos={setTodos} todos={todos}/>
        ))}
      </ul>
    </div>
  )
}
