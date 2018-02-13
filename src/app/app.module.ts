import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { GridLoopComponent } from './main/grid-loop/grid-loop.component';
import { ApiService, HeroService, CommonService } from './main/services';
import { TempComponent } from './main/temp/temp.component';
import { MarkdownPipe } from './main/shared/pipes/markdown.pipe';
import { AlertComponent } from './main/shared/components/alert/alert.component';
import { UserComponent } from './main/user/user.component';
import { SignupComponent } from './main/shared/signup/signup.component';
import { SigninComponent } from './main/shared/signin/signin.component';
import { FeedbackComponent } from './main/shared/feedback/feedback.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'grid', component: GridLoopComponent },
  { path: 'user', component: UserComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridLoopComponent,
    TempComponent,
    MarkdownPipe,
    AlertComponent,
    UserComponent,
    SignupComponent,
    SigninComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, HeroService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
