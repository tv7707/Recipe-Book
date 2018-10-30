// Service for user authorization.
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

// Since we are using router service.
@Injectable()
export class AuthService {
  token: string;

  //Using router method to redirect user to recipe page.
  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    // Using firebase methods for signup.
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      (error) => console.log(error)
    )
  }
    // Function called when user try to sign in.
    signInUser(email: string, password: string) {
      //firebase method
      firebase.auth().signInWithEmailAndPassword(email, password).
        then(
          response => {
            this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken().then(
              (token:string) => this.token = token
            )
          }
      )
        .catch(
          error =>console.log(error)
        );
    }

    getToken() {
      firebase.auth().currentUser.getIdToken().then(
        (token:string) => this.token = token
      )
      return this.token;
    }

    // Function to check if token is received or not.
    isAuthenticated(){
      return this.token  != null;
    }

    // Using Firebase signout method and setting the token to null.
  logout() {
      firebase.auth().signOut();
      this.token =null;
  }

}
