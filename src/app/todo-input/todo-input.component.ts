import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

type TodoAddFrom = {
  todoText: FormControl<string>;
};

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss',
})
export class TodoInputComponent {
  todoService = inject(TodoService);

  form = new FormGroup<TodoAddFrom>({
    todoText: new FormControl('', { nonNullable: true }),
  });

  addTodo() {
    const todoText = this.form.controls['todoText'].value;
    this.todoService.addTodo(todoText);
    this.form.reset();
  }
}
