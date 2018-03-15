import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Users } from '../../../shared/models';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  user: Users;
  userForm: FormGroup;
  isSubmitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formBuilderInit();
  }

  formBuilderInit() {
    this.userForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(8)]],
      address: this.formBuilder.group({
        street: ['', [Validators.required, Validators.minLength(3)]],
        suite: ['', [Validators.required, Validators.minLength(3)]],
        city: ['', [Validators.required, Validators.minLength(3)]],
        zipcode: ['', [Validators.required, Validators.minLength(3)]],
        geo: this.formBuilder.group({
          lat: ['', [Validators.required, Validators.minLength(3)]],
          lng: ['', [Validators.required, Validators.minLength(3)]],
        })
      }),
      phone: ['', [Validators.required, Validators.minLength(5)]],
      website: ['', [Validators.required, Validators.minLength(5)]],
      company: this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(1)]],
        catchPhrase: ['', [Validators.required, Validators.minLength(1)]],
        bs: ['', [Validators.required, Validators.minLength(1)]],
      })
    });
  }

  addUser({ value, valid, disabled }: { value: Users, valid: boolean, disabled: boolean }) {
    this.user = this.userForm.value;
    console.log('user form:  ', this.userForm);
    console.log('user details:  ', this.user);
  }

}
