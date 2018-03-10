import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  targetUrl: string;
  loginStatus = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.targetUrl = this.route.snapshot.queryParams['targetUrl'];
  }

  signInWithGoogle() {
    this.authService.authenticated.subscribe(
      (res: boolean) => {
        this.loginStatus = res;
      }
    );
    if (this.loginStatus) {
      this.router.navigateByUrl(this.targetUrl);
    } else {
      this.authService.signInWithGoogle()
      .then((res) => {
        this.router.navigateByUrl(this.targetUrl);
        })
      .catch((err) => console.log(err));
    }
  }

  signInWithGithub() {
    this.authService.signInWithGithub()
    .then((res) => {
      this.router.navigateByUrl(this.targetUrl);
      })
    .catch((err) => console.log(err));
  }

  signInWithTwitter() {
    this.authService.signInWithTwitter()
    .then((res) => {
      this.router.navigateByUrl(this.targetUrl);
      })
    .catch((err) => console.log(err));
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => {
      this.router.navigateByUrl(this.targetUrl);
      })
    .catch((err) => console.log(err));
  }

}
