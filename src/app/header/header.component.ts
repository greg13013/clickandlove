import {Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private authService: AuthService) { }

  getAuthService(){
    return this.authService;
  }

  ngOnInit() {

    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.authService.isAuth = true;
        } else {
          this.authService.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
