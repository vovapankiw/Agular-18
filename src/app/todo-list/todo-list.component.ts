import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [AsyncPipe, NgFor, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todoService = inject(TodoService);

  readonly todos$ = this.todoService.todoItems$;

  completeTodo(id: number) {
    this.todoService.completeTodo(id);
  }

  removeTodo(id: number) {
    console.log(id);
    this.todoService.removeTodo(id);
  }
}
