import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders} from 'angularfire2';

@Injectable()
export class UserService {
  private loggedIn = true;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(
            user => this._changeState(user),
            error => console.trace(error)
        );
  }

  private _changeState(user: any = null) {
        if (user) {
            this.loggedIn = true;
            console.log("ture");
        }
        else {
            this.loggedIn = false;
        }
    }

    isLoggedIn(){
        return this.loggedIn;
    }
}