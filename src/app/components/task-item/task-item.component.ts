import { Component, Input } from '@angular/core';
import { Tasks } from '../../module-tasks';
import { Task } from '../../task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task;
  faTimes = faTimes;
}
