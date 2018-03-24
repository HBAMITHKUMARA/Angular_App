import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// FormsModule --> for template driven forms
// ReactiveFormsModule --> for reactive forms (model driven forms)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './main/components/home/home.component';
import { GridLoopComponent } from './main/components/grid-loop/grid-loop.component';
import { ApiService, HeroService, CommonService, ObservableService } from './main/shared/services';
import { TempComponent } from './main/components/temp/temp.component';
import { MarkdownPipe } from './main/shared/pipes/markdown.pipe';
import { AlertComponent } from './main/components/alert/alert.component';
import { CardsComponent } from './main/components/cards/cards.component';
import { BlogMainComponent } from './main/components/blog/blog-main/blog-main.component';
import { BlogPostComponent } from './main/components/blog/blog-post/blog-post.component';
import { BlogHomeComponent } from './main/components/blog/blog-home/blog-home.component';
import { NavbarComponent } from './main/components/navbar/navbar.component';
import { FooterComponent } from './main/components/footer/footer.component';
import { SideNavbarComponent } from './main/components/app-helpers/side-navbar/side-navbar.component';
import { TabsComponent } from './main/components/tabs/tabs.component';
import { FormsComponent } from './main/components/forms/forms.component';
import { SignupComponent } from './main/components/forms/form-helpers/signup/signup.component';
import { SigninComponent } from './main/components/forms/form-helpers/signin/signin.component';
import { FeedbackComponent } from './main/components/forms/form-helpers/feedback/feedback.component';
import { HighlightDirective } from './main/shared/directives/highlight.directive';
import { DirectivesComponent } from './main/components/directives/directives.component';
import { BetterHighlightDirective } from './main/shared/directives/better-highlight.directive';
import { HostlistenerHighlightDirective } from './main/shared/directives/hostlistener-highlight.directive';
import { HostbindingHighlightDirective } from './main/shared/directives/hostbinding-highlight.directive';
import { Hostbinding2propertyHighlightDirective } from './main/shared/directives/hostbinding2property-highlight.directive';
import { CustomStructuralDirectiveDirective } from './main/shared/directives/custom-structural-directive.directive';
import { Example1Component } from './main/components/eventemitter/example1/example1.component';
import { Example2Component } from './main/components/eventemitter/example2/example2.component';
import { Example1Service } from './main/shared/services/eventemitter/example1.service';
import { DataBindingComponent } from './main/components/data-binding/data-binding.component';
import { ComponentLifecycleComponent } from './main/components/component-lifecycle/component-lifecycle.component';
import { ComponentLifecycleHelperComponent } from './main/components/component-lifecycle/component-lifecycle-helper/component-lifecycle-helper.component';
import { RouterComponent } from './main/components/router/router.component';
import { Router1Component } from './main/components/router/router1/router1.component';
import { BooksComponent } from './main/components/books-router/books/books.component';
import { BookDetailsComponent } from './main/components/books-router/book-details/book-details.component';
import { BookEditComponent } from './main/components/books-router/book-edit/book-edit.component';
import { BookService } from './main/shared/services/book.service';
import { BookEditSubComponent } from './main/components/books-router/book-edit-sub/book-edit-sub.component';
import { PageNotFoundComponent } from './main/components/page-not-found/page-not-found.component';
import { AuthGuard } from './main/auth/auth-guard.service';
import { AuthService } from './main/auth/auth.service';
import { CanDeactivateGuard } from './main/components/books-router/book-edit-sub/can-deactivate-guard.service';
import { ErrorComponent } from './main/components/error/error.component';
import { BooksResolverService } from './main/components/books-router/books/books-resolver.service';
import { ObservablesComponent } from './main/components/observables/observables.component';
import { Observable1Component } from './main/components/observables/observable1/observable1.component';
import { Observable2Component } from './main/components/observables/observable2/observable2.component';
import { PipesComponent } from './main/components/pipes/pipes.component';
import { LoginComponent } from './main/components/firebase/login/login.component';
import { environment } from '../environments/environment';
import { BooksAuthGuard } from './main/auth/books-auth-guard.service';
import { BooksAuthService } from './main/auth/books-auth.service';
import { PhoneLoginComponent } from './main/components/firebase/phone-login/phone-login.component';
import { WindowService } from './main/auth/window.service';
import { UsersComponent } from './main/components/ngrx/users/users.component';
import { UsersDetailComponent } from './main/components/ngrx/users-detail/users-detail.component';
import { UsersEditComponent } from './main/components/ngrx/users-edit/users-edit.component';
import { UsersService } from './main/components/ngrx/users.service';
import { ModalComponent } from './main/components/ngrx/modal/modal.component';
import { UsersAddComponent } from './main/components/ngrx/users-add/users-add.component';
import { UsersListComponent } from './main/components/ngrx/users-list/users-list.component';
import { PipeModule } from './main/shared/pipes/pipe.module';
import { YoutubeComponent } from './main/components/youtube/youtube.component';
import { reducers } from './main/store/app.reducers';
import { AuthInterceptor } from './main/auth/auth.interceptor';
import { LoggingInterceptor } from './main/auth/logging.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './main/auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridLoopComponent,
    TempComponent,
    MarkdownPipe,
    AlertComponent,
    SignupComponent,
    SigninComponent,
    FeedbackComponent,
    CardsComponent,
    BlogMainComponent,
    BlogPostComponent,
    BlogHomeComponent,
    NavbarComponent,
    FooterComponent,
    SideNavbarComponent,
    TabsComponent,
    FormsComponent,
    HighlightDirective,
    DirectivesComponent,
    BetterHighlightDirective,
    HostlistenerHighlightDirective,
    HostbindingHighlightDirective,
    Hostbinding2propertyHighlightDirective,
    CustomStructuralDirectiveDirective,
    Example1Component,
    Example2Component,
    DataBindingComponent,
    ComponentLifecycleComponent,
    ComponentLifecycleHelperComponent,
    RouterComponent,
    Router1Component,
    BooksComponent,
    BookDetailsComponent,
    BookEditComponent,
    BookEditSubComponent,
    PageNotFoundComponent,
    ErrorComponent,
    ObservablesComponent,
    Observable1Component,
    Observable2Component,
    PipesComponent,
    LoginComponent,
    PhoneLoginComponent,
    UsersComponent,
    UsersDetailComponent,
    UsersEditComponent,
    ModalComponent,
    UsersAddComponent,
    UsersListComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config, 'test-abf'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipeModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [
    ApiService,
    BookService,
    CommonService,
    Example1Service,
    HeroService,
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    BooksResolverService,
    ObservableService,
    BooksAuthService,
    BooksAuthGuard,
    WindowService,
    UsersService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
