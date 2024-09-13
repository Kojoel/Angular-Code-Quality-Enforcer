import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, ],
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }} ({{ user.age }})</li>
    </ul>
  `,
  styles: [`
    ul { list-style-type: none; padding: 0; }
    li { margin-bottom: 10px; }
  `]
})
export class UserListComponent implements OnInit {
  users: any[] | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}