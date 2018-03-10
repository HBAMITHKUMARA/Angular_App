import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginStatus: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authenticated.subscribe(
      (res: boolean) => {
        this.loginStatus = res;
      }
    );
  }

  onLogout() {
    this.authService.logout();
  }

}
