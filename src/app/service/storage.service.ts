import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

 getId(){
  localStorage.getItem("id")
 }

 setId(id :number){
  localStorage.setItem("id",JSON.stringify(id))
 }

  clear(){
    localStorage.clear()
  }
}
