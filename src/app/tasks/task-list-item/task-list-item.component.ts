import { TaskService } from './../shared/task.service';
import { Task } from './../shared/task';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input()
  task!: Task;

  constructor(private TaskService: TaskService) { }

  ngOnInit() {

  }

  remove(task: Task) {
    this.TaskService.delete(task.id);
  }

  onCompletedCheckChange(task: Task) {
    this.TaskService.save(task);
  }

}

