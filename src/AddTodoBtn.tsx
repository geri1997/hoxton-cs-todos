import React from 'react';

const AddTodoBtn = ({
   addTodo,
   setTodos,
   todos,
}: {
   addTodo: any;
   setTodos: any;
   todos: any;
}) => {
   return (
      <button
         onClick={() => {
            const updatedTodos = addTodo(todos, 'New todo, yay!');
            setTodos(updatedTodos);
         }}
      >
         ADD TODO
      </button>
   );
};

export default AddTodoBtn;
