import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// FormsModule --> for template driven forms
// ReactiveFormsModule --> for reactive forms (model driven forms)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
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
  { path: 'blog-main', component: BlogMainComponent },
  { path: 'blog-post', component: BlogPostComponent },
  { path: 'blog-home', component: BlogHomeComponent},
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
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, HeroService, CommonService, Example1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
