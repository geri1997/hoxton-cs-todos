import React from 'react'

const TodoLi = ({todo,removeTodo,setTodos,todos}:{todo:any,removeTodo:any,setTodos:any,todos:any}) => {
  return (
    <li  data-testid={`todo-${todo.id}`}>
            {todo.title}
            <button data-testid={`remove-${todo.id}`}
              onClick={() => {
                const updatedTodos = removeTodo(todos, todo.id)
                setTodos(updatedTodos)
              }}
            >
              X
            </button>
          </li>
  )
}

export default TodoLi