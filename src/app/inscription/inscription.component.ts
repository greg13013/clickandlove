import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {UtilisateurService} from "../services/utilisateur.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  errorMessage: string;
  numEtape: number;
  now = new Date();
  mois = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  annee : number[];
  formValider : any;
  progress: number;

  constructor(private authService: AuthService, private router: Router, private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.formValider = [];
    this.numEtape = 1;
    this.etape(this.numEtape);
    this.initialiseAnnee();
  }

  etape(numEtape: number){
    this.numEtape = numEtape;
    if(this.numEtape === 6){
      this.numEtape = 5;
      document.getElementById('submit').setAttribute('type','submit');
    }
    if(this.numEtape === 0){
      this.numEtape = 1;
    }

    this.etapeVisible(this.numEtape);



  }

  initialiseAnnee(){
    this.annee = [];
    for(let i = this.now.getFullYear(); i > 1930; i-- ){
      this.annee.push(i);
    }
  }

  etapeVisible(numEtape: number){

    console.log('etape : ',this.numEtape);
    if (this.numEtape === 1){
      document.getElementById('etape1').className = 'etapeVisible tailleText d-flex align-items-center flex-column';
      document.getElementById('etape2').className = 'etapeInvisible';
      document.getElementById('etape3').className = 'etapeInvisible';
      document.getElementById('etape4').className = 'etapeInvisible';
      document.getElementById('etape5').className = 'etapeInvisible';
      this.progress = 18;

    }
    else if (this.numEtape === 2){
      console.log(this.mois);
      document.getElementById('etape1').className = 'etapeInvisible';
      document.getElementById('etape2').className = 'etapeVisible tailleText d-flex align-items-center flex-column';
      document.getElementById('etape3').className = 'etapeInvisible';
      document.getElementById('etape4').className = 'etapeInvisible';
      document.getElementById('etape5').className = 'etapeInvisible';
      this.progress = 36;

    }
    else if (this.numEtape === 3){
      document.getElementById('etape1').className = 'etapeInvisible';
      document.getElementById('etape2').className = 'etapeInvisible';
      document.getElementById('etape3').className = 'etapeVisible';
      document.getElementById('etape4').className = 'etapeInvisible';
      document.getElementById('etape5').className = 'etapeInvisible';
      this.progress = 54;
    }
    else if (this.numEtape === 4){
      document.getElementById('etape1').className = 'etapeInvisible';
      document.getElementById('etape2').className = 'etapeInvisible';
      document.getElementById('etape3').className = 'etapeInvisible';
      document.getElementById('etape4').className = 'etapeVisible';
      document.getElementById('etape5').className = 'etapeInvisible';
      document.getElementById('submit').setAttribute('type','button');
      this.progress = 72;
    }
    else if (this.numEtape === 5){
      document.getElementById('etape1').className = 'etapeInvisible';
      document.getElementById('etape2').className = 'etapeInvisible';
      document.getElementById('etape3').className = 'etapeInvisible';
      document.getElementById('etape4').className = 'etapeInvisible';
      document.getElementById('etape5').className = 'etapeVisible';
      this.progress = 90;

    }
  }

  validerInscription(form: NgForm){
    this.formValider = form.value;
    console.log(form.value);
    const email = form.value['email'];
    const password = form.value['mdp'];

    this.authService.createNewUser(email, password).then(
      () => {
        this.utilisateurService.ajouterUtilisateur([this.formValider])
        this.router.navigate(['/pageLike']);
      },
      (error) => {
        this.errorMessage = error;
      }
    )



  }

}
