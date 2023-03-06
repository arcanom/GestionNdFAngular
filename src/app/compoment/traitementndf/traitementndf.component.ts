import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpServiceService } from 'src/app/service/http-service.service';

@Component({
  selector: 'app-traitementndf',
  templateUrl: './traitementndf.component.html',
  styleUrls: ['./traitementndf.component.css']
})
export class TraitementndfComponent implements OnInit {

  ndfs :  any
  status: any
  constructor(private route : Router,private httpService :  HttpServiceService) { }

  ngOnInit(): void {
    this.getAllNdf()
  }


getAllNdf(){
    this.httpService.getAllNdf().subscribe(x => {
      this.ndfs = x
      console.log(this.ndfs)
    })
}

updateStatusToValidated(id:number){
  this.status = {
    status :"VALIDATED"
  }

  this.httpService.updateStatusNdf(id,this.status).subscribe(x=> {
    console.log(x)
  })
  window.location.reload();
}

updateStatusToRefused(id:number){
  this.status = {
    status :"REFUSED"
  }

  this.httpService.updateStatusNdf(id,this.status).subscribe(x=> {
    console.log(x)
  })
  window.location.reload();
}

updateStatusToPaid(id: number){
  this.status = {
    status: "PAID"
  }

  this.httpService.updateStatusNdf(id,this.status).subscribe(x=> {
    console.log(x)
  })
  window.location.reload();
}

  deconnect(){
    this.route.navigate(['/connexion'])
  }


}
