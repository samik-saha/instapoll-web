import { OnInit, Component } from '@angular/core';
import {AngularFireAuth} from 'angularfire2';

@Component({
    selector: "user",
    template: `
        <section [ngSwitch]="isAuth">
            <div *ngSwitchCase="true">
                <button (click)="logout()">Logout</button>
            </div>
            <div *ngSwitchCase="false">
                <a routerLink="/login">Login</a>
            </div>
        </section>
    `
})

export class UserComponent{
    isAuth = false;
    constructor(private auth: AngularFireAuth){
        this.auth.subscribe(
            user => this._changeState(user),
            error => console.trace(error)
        );
    }

    _changeState(user){
        if (user){
            this.isAuth = true;
        }
        else{
            this.isAuth = false;
        }
    }

    logout() {
        this.auth.logout();
    }
}
