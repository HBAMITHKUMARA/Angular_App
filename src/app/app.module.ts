import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './main/test/test.component';
import { WelcomeComponent } from './main/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
