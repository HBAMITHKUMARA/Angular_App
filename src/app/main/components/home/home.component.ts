import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AuthService } from '../../auth/auth.service';
import * as fromAuthReducer from '../../auth/store/auth.reducers';
import * as fromAppReducer from '../../store/app.reducers';
import * as fromAuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authState: Observable<fromAuthReducer.State>;

  constructor(private authService: AuthService, private store: Store<fromAppReducer.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('authReducer');
  }

  onLogout() {
    this.store.dispatch(new fromAuthActions.SignOut());
  }

}
