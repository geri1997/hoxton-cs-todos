import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { addTodo, App, removeTodo } from './App';

describe('addTodo', () => {
   it('returns an array with one todo', () => {
      const result = addTodo([], 'new todo');
      expect(result).toMatchObject([{ id: 1, title: 'new todo' }]);
   });
   it('returns an existing array of todos with an extra added todo', () => {
      const result = addTodo(
         [
            { id: 1, title: 'new todo' },
            { id: 2, title: 'new todo2' },
            { id: 3, title: 'new todo3' },
         ],
         '4th todo'
      );
      expect(result).toMatchObject([
         { id: 1, title: 'new todo' },
         { id: 2, title: 'new todo2' },
         { id: 3, title: 'new todo3' },
         { id: 4, title: '4th todo' },
      ]);
   });
});

describe('removeTodo', () => {
   it('returns an empty array if input array is emtpy', () => {
      const result = removeTodo([], 1);
      expect(result).toMatchObject([]);
   });
   it('returns an empty array if input array is emtpy', () => {
      const result = removeTodo([], 30);
      expect(result).toMatchObject([]);
   });
   it('returns an array without a specified todo', () => {
      const result = removeTodo(
         [
            { id: 1, title: 'new todo' },
            { id: 2, title: 'new todo2' },
            { id: 3, title: 'new todo3' },
         ],
         1
      );
      expect(result).toMatchObject([
         { id: 2, title: 'new todo2' },
         { id: 3, title: 'new todo3' },
      ]);
   });
   it('returns an array without a specified todo', () => {
      const result = removeTodo(
         [
            { id: 1, title: 'new todo' },
            { id: 2, title: 'new todo2' },
            { id: 3, title: 'new todo3' },
         ],
         3
      );
      expect(result).toMatchObject([
         { id: 1, title: 'new todo' },
         { id: 2, title: 'new todo2' },
      ]);
   });
});

describe('App display on load', () => {
   it('Displays add todo button and h1 on load', () => {
      render(<App />);
      const heading = screen.getByRole('heading');
      const addTodoBtn = screen.getByRole('button');
      expect(heading).toHaveTextContent('Todo app');
      expect(addTodoBtn).toHaveTextContent('ADD TODO');
   });
});

describe('Todo buttons', () => {
   it(`Add new todo on clicking the 'add todo button'`, () => {
      render(<App />);
      const addTodoButton = screen.getByText('ADD TODO');
      fireEvent.click(addTodoButton);

      const display = screen.getByTestId('todo-1');

      expect(display.textContent).toContain('New todo, yay!');
   });

   it(`Removes the only todo left on clicking the 'X button'`, () => {
      render(<App />);
      const addTodoButton = screen.getByText('ADD TODO');
      fireEvent.click(addTodoButton);

      const removeTodoButton = screen.getByText('X');
      fireEvent.click(removeTodoButton);
      const display = screen.getByRole('list');
      expect(display.innerHTML).toBe('');
   });

   it(`Removes a todo on clicking the 'X button'`, () => {
      render(<App />);
      const addTodoButton = screen.getByText('ADD TODO');
      fireEvent.click(addTodoButton);
      fireEvent.click(addTodoButton);
      fireEvent.click(addTodoButton);
      fireEvent.click(addTodoButton);
      fireEvent.click(addTodoButton);
      fireEvent.click(addTodoButton);
      fireEvent.click(addTodoButton);
      fireEvent.click(addTodoButton);
      fireEvent.click(addTodoButton);
      fireEvent.click(addTodoButton);

      const removeTodoButton = screen.getByTestId('remove-3');
      fireEvent.click(removeTodoButton);
      const display = screen.getAllByRole('listitem');
      expect(display.length).toBe(9)
   });
});
