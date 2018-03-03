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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'component-lifecycle', component: ComponentLifecycleComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'event-emitter-example1', component: Example1Component },
  { path: 'forms', component: FormsComponent },
  { path: 'grid', component: GridLoopComponent },
  { path: 'user', component: UserComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'router', component: RouterComponent },
  { path: 'router1', component: Router1Component },
  { path: 'blog-main', component: BlogMainComponent },
  { path: 'blog-post', component: BlogPostComponent },
  { path: 'blog-home', component: BlogHomeComponent}
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
