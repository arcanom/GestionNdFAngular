import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-traitementndf',
  templateUrl: './traitementndf.component.html',
  styleUrls: ['./traitementndf.component.css']
})
export class TraitementndfComponent implements OnInit {

  ndfs :  any
  status: any
  idAdmin: any

  constructor(private route : Router,private httpService :  HttpServiceService, private storageService : StorageService) { }

  ngOnInit(): void {
    this.getAllNdf()
    this.idAdmin =  localStorage.getItem("id")

  }


getAllNdf(){
    this.httpService.getAllNdf().subscribe(x => {
      this.ndfs = x
      // console.log(this.ndfs)
    })
}

updateStatusToValidated(id:number){
  this.status = {
    status :"VALIDATED",
    admin: this.idAdmin
  }

  this.httpService.updateStatusNdf(id,this.status).subscribe(x=> {
    console.log(x)
  })
  window.location.reload();
}

updateStatusToRefused(id:number){
  this.status = {
    status : "REFUSED",
    admin: this.idAdmin
  }

  this.httpService.updateStatusNdf(id,this.status).subscribe(x=> {
    console.log(x)
  })
  window.location.reload();
}

updateStatusToPaid(id: number){
  this.status = {
    status: "PAID",
    admin: this.idAdmin
  }

  this.httpService.updateStatusNdf(id,this.status).subscribe(x=> {
    console.log(x)
  })
  window.location.reload();
}

  deconnect(){
    sessionStorage.clear()
    this.storageService.clear()
    this.route.navigate(['/connexion'])
  }


}
