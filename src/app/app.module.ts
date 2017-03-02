import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule,AuthProviders, AuthMethods } from 'angularfire2';
import { MaterialModule } from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { PollComponent } from './poll.component';
import {routing} from './app.routes';
import { LoggedInGuard } from './logged-in.guard';
import { UserService } from './user.service';

const myFirebaseConfig = {
  apiKey: "AIzaSyAseOIvCZT4xxGDVyIO2g35s0bj9F4EhpE",
  authDomain: "digital-voting-pad-35227.firebaseapp.com",
  databaseURL: "https://digital-voting-pad-35227.firebaseio.com",
  storageBucket: "digital-voting-pad-35227.appspot.com",
  messagingSenderId: "388670650304"
};

const myFirebaseAuthConfig = {
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PollComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    MaterialModule
  ],
  providers: [LoggedInGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
