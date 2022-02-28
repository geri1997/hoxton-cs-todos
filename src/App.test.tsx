import { describe, it, expect } from 'vitest';
import { addTodo, removeTodo } from './App';

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
