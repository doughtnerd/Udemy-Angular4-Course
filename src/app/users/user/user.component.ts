import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};

  paramsSub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    // Use this to protect against reloading in page, this way will change the rendering.
    this.paramsSub = this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }

  ngOnDestroy() {
    /* Angular handles un-subscribing for us, but as a general rule, it's good to do this. As when we make our
    own observables, we have to un-subscribe from them ourselves.
     */
    this.paramsSub.unsubscribe();
  }
}
