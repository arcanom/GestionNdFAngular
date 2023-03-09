import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-mesndf',
  templateUrl: './mesndf.component.html',
  styleUrls: ['./mesndf.component.css']
})
export class MesndfComponent implements OnInit {
role : any
userdetails: any
user : any
data : any
id:  any
ndfs: any
  constructor(private route : Router, private storageService : StorageService, private httpService: HttpServiceService) { }

  ngOnInit(): void {
    this.userdetails =  JSON.parse(sessionStorage.getItem("userdetails"))
    this.role =  this.userdetails.authorities[0].authority
    this.user = this.userdetails.username
    this.httpService.getEmployeByUsername(this.user).subscribe(x=> {
        this.data =  x
        console.log(this.data.id)
        this.id = this.data.id
        // localStorage.setItem("id",this.data.id)
        this.httpService.getNdfByEmployeeId(this.id).subscribe(x=>{
          this.ndfs =  x
          // console.log(this.ndfs)
      })
    })
    // this.id = localStorage.getItem("id")

  }

  deconnect(){
    sessionStorage.clear()
    this.storageService.clear()
    this.route.navigate(['/connexion'])
  }

}
