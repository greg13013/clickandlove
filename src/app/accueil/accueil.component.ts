import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {

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
