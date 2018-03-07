import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// FormsModule --> for template driven forms
// ReactiveFormsModule --> for reactive forms (model driven forms)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './main/components/home/home.component';
import { GridLoopComponent } from './main/components/grid-loop/grid-loop.component';
import { ApiService, HeroService, CommonService } from './main/shared/services';
import { TempComponent } from './main/components/temp/temp.component';
import { MarkdownPipe } from './main/shared/pipes/markdown.pipe';
import { AlertComponent } from './main/components/alert/alert.component';
import { UserComponent } from './main/components/user/user.component';
import { CardsComponent } from './main/components/cards/cards.component';
import { BlogMainComponent } from './main/components/blog/blog-main/blog-main.component';
import { BlogPostComponent } from './main/components/blog/blog-post/blog-post.component';
import { BlogHomeComponent } from './main/components/blog/blog-home/blog-home.component';
import { NavbarComponent } from './main/components/navbar/navbar.component';
import { FooterComponent } from './main/components/footer/footer.component';
import { KeysPipe } from './main/shared/pipes/keys.pipe';
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
    FeedbackComponent,
    CardsComponent,
    BlogMainComponent,
    BlogPostComponent,
    BlogHomeComponent,
    NavbarComponent,
    FooterComponent,
    KeysPipe,
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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    BookService,
    CommonService,
    Example1Service,
    HeroService,
    AuthGuard,
    AuthService,
    CanDeactivateGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
