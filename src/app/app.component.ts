import { Component } from '@angular/core';
import { AngularFire, AuthProviders, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InstaPoll';
}
