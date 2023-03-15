import { Component } from '@angular/core';
import { Task } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tasks: Task[] = []

  addItemToTasks(task: Task) {
    console.info('>>> task: ', task)
      this.tasks.push(task)
  }

}
