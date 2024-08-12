import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoInputComponent } from './todo-input/todo-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, TodoListComponent, TodoInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-app';
}
