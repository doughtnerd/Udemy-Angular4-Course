import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC4TyJ0XARc_2D40DlqmopNXipIIXNJqxk',
      authDomain: 'udemy-course-project-84038.firebaseapp.com',
    });
  }
}
