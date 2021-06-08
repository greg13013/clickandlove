import { Injectable } from '@angular/core';
import firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {Utilisateur} from "../../models/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {


  user : Utilisateur;
  constructor() { }

  ajouterUtilisateur(user:any[]){
    firebase.database().ref('/users/'+this.getUid()).set(user);
  }

  getUtilisateur(uid: string){
    return new Promise(
      (resolve, reject) => {
          firebase.database().ref('/users/' + uid +'/').once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    ).then(
      (res) => {
        this.user.uid = this.getUid();
        this.user.pseudo = res[0].pseudo;
        this.user.mail = res[0].email;
        this.user.mdp = res[0].mdp;
        this.user.dtn = res[0].jour + ' / ' + res[0].mois + ' / ' + res[0].annee;
        this.user.genre = res[0].sexe;
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUid(){
    let users = firebase.auth().currentUser;
    return users.uid;
  }

}
