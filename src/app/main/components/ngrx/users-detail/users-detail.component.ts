import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UsersService } from '../users.service';
import { Observable } from 'rxjs/Observable';
import { Users } from '../../../shared/models';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  id: number;
  user: Observable<Users>;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id'];
      this.user = this.usersService.getUser(this.id);
    });
  }

  isObject(data: any) {
    return typeof data === 'object';
  }

}
