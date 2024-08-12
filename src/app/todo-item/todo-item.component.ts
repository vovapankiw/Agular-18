import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../types/todo.type';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input({ required: true }) todo!: Todo;

  @Output() completeTodo = new EventEmitter<number>();
  @Output() removeTodo = new EventEmitter<number>();

  handleRemoveTodo() {
    this.removeTodo.emit(this.todo.id);
  }

  handleCompleteTodo() {
    this.completeTodo.emit(this.todo.id);
  }
}
