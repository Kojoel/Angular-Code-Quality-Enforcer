import { Component, OnInit } from '@angular/core';
import { Task } from '../interface/test.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgFor],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements OnInit {
  constructor() {}

  tasks: Task[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Write Unit Tests', completed: false },
    { id: 3, title: 'Refactor Code', completed: false },
  ];

  ngOnInit(): void {}

  markComplete(task: Task): void {
    task.completed = true;
  }
}
