import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Task } from '../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm!: FormGroup

  constructor(private fb: FormBuilder) { }
  
  @Output()
  onNewTask = new Subject<Task>()
  
  ngOnInit(): void {
    this.todoForm = this.createTodoForm()
  }
  
  isInvalid(): boolean {
    return this.todoForm.invalid
  }

  addTask() {
    const task = this.todoForm.value as Task
    this.onNewTask.next(task)
    console.info('>>> saving toDoForm', task)
    this.todoForm.reset()
  }

  deleteTask(idx: number) {
    console.info('>>> deleting task: ', idx)
  }
  
  private createTodoForm(): FormGroup {
    return this.fb.group({
      description: this.fb.control<string>('', [ Validators.required, Validators.minLength(5) ] ),
      priority: this.fb.control<string>('Low', [ Validators.required ]),
      due: this.fb.control<string>((''), [ Validators.required ] )
    })
  }

}
