import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  welcome = '-- not initialized yet --';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.welcome = this.userService.isLoggedIn ?
    'Welcome, ' + this.userService.user.name :
    'Please log in.';
  }

}
