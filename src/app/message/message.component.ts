import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../services/utilisateur.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: any[];

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.message = [];
  }

  ajoutMessage(form: NgForm){
    let contenue = []

    contenue['message'] = form.value['message'];
    contenue['pseudo'] = this.utilisateurService.user.pseudo;

    form.reset();
    this.message.push(contenue);
    document.getElementById('message')
  }

}
