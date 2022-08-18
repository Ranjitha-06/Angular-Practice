import { Component, Input } from '@angular/core';
import { Tasks } from '../../module-tasks';
import { Task } from '../../task';
import { TaskService } from '../../server/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  tasks: Task[] = Tasks;
  constructor(private service: TaskService) {}

  ngOnInit(): void {
    this.service.getTasks().subscribe((tasks) => console.log(tasks));
  }
}
