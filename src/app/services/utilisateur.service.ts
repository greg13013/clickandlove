import { Injectable } from '@angular/core';
import firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {


  user : any;
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
    );
  }

  getUid(){
    let users = firebase.auth().currentUser;
    return users.uid;
  }

}
