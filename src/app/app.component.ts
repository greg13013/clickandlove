import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clickandlove';
  db: any;

  constructor() {
    const config = {
      apiKey: "AIzaSyBoABOi2zE-GS63KeuRYt42uyAHzvicJz0",
      authDomain: "clickandlove-8e069.firebaseapp.com",
      projectId: "clickandlove-8e069",
      storageBucket: "clickandlove-8e069.appspot.com",
      messagingSenderId: "283202566668",
      appId: "1:283202566668:web:74758cb39d74d65be74c29"
    };
    let app = firebase.initializeApp(config);
   this.db = firebase.firestore(app);
  }
}
