import {Component} from '@angular/core';
import {AngularFire, AuthProviders} from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
})

export class LoginComponent {
    isAuth = false;
    authColor = 'warn';
    user = {};
    returnUrl: string;

    constructor( private route: ActivatedRoute,
        private router: Router, public af: AngularFire) {
        this.af.auth.subscribe(
            user => this._changeState(user),
            error => console.trace(error)
        );

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login(from: string) {
        this.af.auth.login({
            provider: this._getProvider(from)
        });
    }

    logout() {
        this.af.auth.logout();
    }

    private _changeState(user: any = null) {
        if (user) {
            this.isAuth = true;
            this.authColor = 'primary';
            this.user = this._getUserInfo(user)
            if (this.returnUrl != '/')
                this.router.navigate([this.returnUrl]);
        }
        else {
            this.isAuth = false;
            this.authColor = 'warn';
            this.user = {};
        }
    }

    private _getUserInfo(user: any): any {
        if (!user) {
            return {};
        }
        let data = user.auth.providerData[0];
        return {
            name: data.displayName,
            avatar: data.photoURL,
            email: data.email,
            provider: data.providerId
        };
    }

    private _getProvider(from: string) {
        switch (from) {
            case 'twitter': return AuthProviders.Twitter;
            case 'facebook': return AuthProviders.Facebook;
            case 'github': return AuthProviders.Github;
            case 'google': return AuthProviders.Google;
        }
    }
}