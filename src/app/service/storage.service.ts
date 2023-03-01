import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getNom(){
    return localStorage.getItem("nom")
  }

  setNom(nom:any){
    localStorage.setItem("nom",nom)
  }

  removeNom(){
    localStorage.removeItem("nom")
  }

  getPrenom(){
    return localStorage.getItem("prenom")
  }

  setPrenom(prenom:string){
    localStorage.setItem("prenom",prenom)
  }




  getEmail(){
    return localStorage.getItem("email")
  }

  setEmail(email: any ){
    localStorage.setItem("email",email)
  }

  removeEmail(){
    localStorage.removeItem("email")
  }

  clear(){
    localStorage.clear()
  }
}
