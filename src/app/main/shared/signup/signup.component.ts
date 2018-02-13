import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  post: any;
  email: string;
  password: string;
  cPassword: string;

  constructor(private formBuilder: FormBuilder) { 
    this.signupForm = formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'cPassword': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {
  }

  addPost(post) {
    this.email = post.email;
    this.password = post.password;
    this.cPassword = post.cPassword;
  }

}
