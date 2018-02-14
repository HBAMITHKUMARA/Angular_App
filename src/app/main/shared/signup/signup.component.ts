import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userList: User[] = [];
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   account: new FormGroup({
    //     email: new FormControl('', [Validators.required, Validators.minLength(8)]),
    //     password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //     confirm: new FormControl('', [Validators.required, Validators.minLength(3)])
    //   })
    // });

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      account: this.formBuilder.group({
        email: ['', [Validators.required, Validators.minLength(8)]],
        password: ['', [Validators.required, Validators.minLength(3)]],
        confirm: ['', [Validators.required, Validators.minLength(3)]]
      })
    });
  }

  signup({ value, valid, disabled }: { value: User, valid: boolean, disabled: boolean }) {
    this.userList.push(this.signupForm.value);
    console.log('signupForm:  ', this.signupForm);
    console.log('signupForm value:  ', this.signupForm.value);
    console.log('signupForm cool', value, valid, disabled);

  }

}
