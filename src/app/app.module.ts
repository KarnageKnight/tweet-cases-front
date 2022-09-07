import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllUserTweetsComponent } from './all-user-tweets/all-user-tweets.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AllTweetsComponent } from './all-tweets/all-tweets.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUserTweetsComponent,
    AllCommentsComponent,
    LoginComponent,
    AllTweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
