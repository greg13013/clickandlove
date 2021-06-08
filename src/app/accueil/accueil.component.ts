import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  errorMessage: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    if (this.authService.isAuth === true){
      this.router.navigate(['/pageLike'])
    }

  }


  onSubmit(form: NgForm) {
    const email = form.value['email'];
    const password = form.value['mdp'];
    console.log(email)

    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/pageLike']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
