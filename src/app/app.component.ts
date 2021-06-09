import { Component } from '@angular/core';
import firebase from 'firebase';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clickandlove';
  db: any;
  tabImage = [
    "assets/img/background1.jpg",
    "assets/img/background3.jpg",
  ];
  backgroundVisible: string;
  backgroundInvisible: string;

  tabImageChoisis : any[];
  numeroImage : number;

  constructor(private authService: AuthService) {
    this.numeroImage = 0
    this.tabImageChoisis = [];
    this.backgroundVisible = "background";
    this.backgroundInvisible = "backgroundArriere";
    this.tabImageChoisis[0] = this.tabImage[0];
    this.tabImageChoisis[1] = this.tabImage[1];
    console.log('isAuth : ',authService.isAuth)
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

   //Initialise la déconnexion lors du rafraichissement
    authService.signOutUser();

    setInterval(() => { this.defilementImage(); }, 5000)
    console.log('num image : ', this.numeroImage);
  }

  defilementImage (){

    if (this.backgroundVisible === 'background'){
      this.backgroundVisible = 'backgroundArriere';
      this.backgroundInvisible = 'background';
    }
    else {
      this.backgroundVisible = 'background';
      this.backgroundInvisible = 'backgroundArriere';
    }

    this.numeroImage += 1;
    if (this.numeroImage >= this.tabImage.length){
      this.numeroImage = 0 ;
    }


    // console.log('tabImageChosis', this.tabImageChoisis);
    //
    // console.log('numeroImage : ',this.numeroImage);
    // console.log('lenght tab image : ',this.tabImage.length);
    //return this.tabImage[this.numeroImage];

  }
}
