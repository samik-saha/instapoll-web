import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AngularFireAuth, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Rx'


@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) {}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
        return this.auth.map((auth) => {
            if (auth) {
                console.log('authenticated');
                return true;
            }
            console.log('not authenticated');
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }).first(); // this might not be necessary - ensure `first` is imported if you use it
    }
}