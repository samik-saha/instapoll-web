import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule,AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';


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
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
