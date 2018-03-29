import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppModule } from '../../../app.module';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { PipeModule } from '../../shared/pipes/pipe.module';
import { userLazyReducer } from './store/user-lazy.reducer';
import { UserLazyEffects } from './store/user-lazy.effects';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    PipeModule,
    StoreModule.forFeature('user', userLazyReducer),
    EffectsModule.forFeature([UserLazyEffects])
  ],
  declarations: [
    UserComponent
  ],
  providers: []
})
export class UserModule { }
