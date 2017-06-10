import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) {}

  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => console.log(error));
  }

  signin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
      this.router.navigate(['/']);
      firebase.auth().currentUser.getToken().then((data) => {
        console.log(data);
        this.token = data;
      });
    }).catch((error) => console.log(error));
  }

  getToken() {
    firebase.auth().currentUser.getToken().then((token) => {
      this.token = token;
    });
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }
}
