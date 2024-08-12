import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './types/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoItemsSubject$ = new BehaviorSubject<Todo[]>([]);
  todoItems$ = this.todoItemsSubject$.asObservable();

  constructor() {}

  addTodo(todoText: string): Todo {
    const newTodo: Todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    const currentTodoList = this.todoItemsSubject$.value;

    this.todoItemsSubject$.next([...currentTodoList, newTodo]);

    return newTodo;
  }

  removeTodo(removeId: number) {
    const currentTodoList = this.todoItemsSubject$.value.filter(
      ({ id }) => id !== removeId,
    );
    this.todoItemsSubject$.next(currentTodoList);
  }

  completeTodo(updateId: number): void {
    const updatedTodoList = this.todoItemsSubject$.value.map((todo) => {
      if (todo.id === updateId) {
        return {
          ...todo,
          completed: true,
        };
      }

      return { ...todo };
    });

    this.todoItemsSubject$.next(updatedTodoList);
  }
}
