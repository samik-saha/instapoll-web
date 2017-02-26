import { OnInit, Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: './poll.component.html',
    styleUrls: ['./app.component.css']
})

export class PollComponent implements OnInit {
    items: FirebaseListObservable<any[]>;

    constructor(public af: AngularFire, private activatedRoute: ActivatedRoute) {
        this.items = af.database.list('/polls');
    }

    ngOnInit() {
        // subscribe to router event
        this.activatedRoute.params.subscribe((params: Params) => {
            let userId = params['id'];
            console.log(userId);
        });
    }
}