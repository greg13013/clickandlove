import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../services/utilisateur.service";
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-page-like',
  templateUrl: './page-like.component.html',
  styleUrls: ['./page-like.component.css']
})
export class PageLikeComponent implements OnInit {

  user : any;
  userUid : string;

  constructor(private utilisateurService: UtilisateurService) { }

  getUtilisateurService() {
    return this.utilisateurService;
  }

  ngOnInit(): void {
    this.utilisateurService.user = new Utilisateur();
    this.userUid = this.utilisateurService.getUid();
    this.utilisateurService.getUtilisateur(this.userUid)
    console.log('current user : ',this.utilisateurService.getUid());


  }

}
