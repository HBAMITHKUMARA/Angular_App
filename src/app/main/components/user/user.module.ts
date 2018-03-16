import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppModule } from '../../../app.module';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { PipeModule } from '../../shared/pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    PipeModule
  ],
  declarations: [
    UserComponent
  ],
  providers: []
})
export class UserModule { }
