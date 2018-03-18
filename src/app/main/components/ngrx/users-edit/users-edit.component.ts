import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Users } from '../../../shared/models';
import { UsersService } from '../users.service';
import * as UsersActions from '../store/users.actions';
import * as fromUserReducer from '../store/users.reducers';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  user: Users;
  userForm: FormGroup;
  isSubmitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private store: Store<fromUserReducer.AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.formBuilderInit();
    this.loadUser();
  }

  loadUser() {
    // this.route.params
    // .subscribe((params: Params) => {
    //   const id = +params['id'];
    //   this.usersService.getUser(id).subscribe((res) => {
    //     this.user = res;
    //     this.userForm.patchValue(this.user);
    //   });
    // });

    this.store.select('usersReducer')
    .subscribe(
      (data) => {
        if (data.editedUserId > -1) {
          console.log('data:  ', data.editedUser);
          this.userForm.patchValue(data.editedUser);
        }
      }
    );

  }

  formBuilderInit() {
    this.userForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(1)]],
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

  saveChanges({ value, valid, disabled }: { value: Users, valid: boolean, disabled: boolean }) {
    this.user = this.userForm.value;
    const payload = {user: this.user};
    this.store.dispatch(new UsersActions.UpdateUser(payload));
    this.router.navigate(['ngrx-users']);
  }

}
