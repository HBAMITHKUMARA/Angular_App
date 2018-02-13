import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userList: User[] = [];
  signupForm: FormGroup;

  constructor() { 
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      cPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
    });
  }

  signup() {
    this.userList.push(this.signupForm.value);
    console.log('signupForm:  ', this.signupForm);
    console.log('signupForm value:  ', this.signupForm.value);
  }

}
