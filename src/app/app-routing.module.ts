import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './main/components/home/home.component';
import { GridLoopComponent } from './main/components/grid-loop/grid-loop.component';
import { UserComponent } from './main/components/user/user.component';
import { CardsComponent } from './main/components/cards/cards.component';
import { BlogMainComponent } from './main/components/blog/blog-main/blog-main.component';
import { BlogPostComponent } from './main/components/blog/blog-post/blog-post.component';
import { BlogHomeComponent } from './main/components/blog/blog-home/blog-home.component';
import { TabsComponent } from './main/components/tabs/tabs.component';
import { FormsComponent } from './main/components/forms/forms.component';
import { SignupComponent } from './main/components/forms/form-helpers/signup/signup.component';
import { SigninComponent } from './main/components/forms/form-helpers/signin/signin.component';
import { FeedbackComponent } from './main/components/forms/form-helpers/feedback/feedback.component';
import { DirectivesComponent } from './main/components/directives/directives.component';
import { Example1Component } from './main/components/eventemitter/example1/example1.component';
import { DataBindingComponent } from './main/components/data-binding/data-binding.component';
import { ComponentLifecycleComponent } from './main/components/component-lifecycle/component-lifecycle.component';
import { RouterComponent } from './main/components/router/router.component';
import { Router1Component } from './main/components/router/router1/router1.component';
import { BooksComponent } from './main/components/books-router/books/books.component';
import { BookDetailsComponent } from './main/components/books-router/book-details/book-details.component';
import { BookEditComponent } from './main/components/books-router/book-edit/book-edit.component';
import { BookEditSubComponent } from './main/components/books-router/book-edit-sub/book-edit-sub.component';
import { PageNotFoundComponent } from './main/components/page-not-found/page-not-found.component';
import { AuthGuard } from './main/auth/auth-guard.service';
import { CanDeactivateGuard } from './main/components/books-router/book-edit-sub/can-deactivate-guard.service';
import { ErrorComponent } from './main/components/error/error.component';
import { BooksResolverService } from './main/components/books-router/books/books-resolver.service';
import { ObservablesComponent } from './main/components/observables/observables.component';
import { PipesComponent } from './main/components/pipes/pipes.component';
import { BooksAuthGuard } from './main/auth/books-auth-guard.service';
import { LoginComponent } from './main/components/firebase/login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books',
    canActivateChild: [BooksAuthGuard],
    component: BooksComponent,
    resolve: { books: BooksResolverService },
    children: [
    { path: ':id', component: BookDetailsComponent },
    { path: ':id/edit', component: BookEditComponent },
  ]},
  { path: 'books/:id/edit/sub', canDeactivate: [CanDeactivateGuard], component: BookEditSubComponent },
  { path: 'component-lifecycle', component: ComponentLifecycleComponent },
  { path: 'cards', canActivate: [AuthGuard], component: CardsComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'event-emitter-example1', component: Example1Component },
  { path: 'forms', component: FormsComponent, children: [
    { path: 'feedback', component: FeedbackComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
  ] },
  { path: 'grid', component: GridLoopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'observable', component: ObservablesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'router', component: RouterComponent },
  { path: 'router1', component: Router1Component },
  { path: 'blog-main', component: BlogMainComponent },
  { path: 'blog-post', component: BlogPostComponent },
  { path: 'blog-home', component: BlogHomeComponent },
  // { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'page-not-found', component: ErrorComponent, data: { message: 'Page Not Found.'} },
  { path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
