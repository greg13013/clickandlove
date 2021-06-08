import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../services/utilisateur.service";

@Component({
  selector: 'app-page-like',
  templateUrl: './page-like.component.html',
  styleUrls: ['./page-like.component.css']
})
export class PageLikeComponent implements OnInit {

  user : any;
  userUid : string;

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.userUid = this.utilisateurService.getUid();
    this.user = [];
  this.utilisateurService.getUtilisateur(this.userUid).then(
      (res) => {
        this.user = res
        console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    )
    console.log('current user : ',this.utilisateurService.getUid());


  }

}
