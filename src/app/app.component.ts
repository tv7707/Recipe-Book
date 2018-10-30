import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  // Initializing firebase.
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCDcK7BW7hCHgTblnkv34ZHpIqRz0RsG4k",
      authDomain: "angular-recipe-book-51647.firebaseapp.com"
    })
  }

}
