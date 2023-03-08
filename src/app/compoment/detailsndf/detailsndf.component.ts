import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/service/http-service.service';

@Component({
  selector: 'app-detailsndf',
  templateUrl: './detailsndf.component.html',
  styleUrls: ['./detailsndf.component.css']
})
export class DetailsndfComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private HttpService: HttpServiceService) { }
  id : any
  ndf : any
  title :  any
  date: any
  amount: any
  description: any
  proofs: any
  category: any
  status:any
  idEmploye: any
  nameEmploye: any
  nameEmployeFirstname: any
  nameEmployeLastname: any
  idAdmin: any
  nameAdmin : any
  nameAdminFirstname: any
  nameAdminLastname: any
  ngOnInit(): void {
   this.id = this.activatedRoute.snapshot.params['id']
    this.HttpService.getNdfById(this.id).subscribe(x => {
      this.ndf =  x
      this.title = this.ndf.title
      this.date = this.ndf.date
      this.amount = this.ndf.amount
      this.description = this.ndf.description
      this.proofs =  this.ndf.proofs
      this.category = this.ndf.category.name
      this.status = this.ndf.status
      localStorage.setItem("idEmployee",this.ndf.employee)
      localStorage.setItem("idAdmin",this.ndf.admin)

    })

    this.idEmploye = localStorage.getItem("idEmployee")
    this.idAdmin = localStorage.getItem("idAdmin")

    this.HttpService.getEmployeeById(this.idEmploye).subscribe(x=>{
      this.nameEmploye =  x;
      this.nameEmployeFirstname = this.nameEmploye.firstName
      this.nameEmployeLastname = this.nameEmploye.lastName
    })

    this.HttpService.getEmployeeById(this.idAdmin).subscribe(x=>{
      this.nameAdmin =  x;
      this.nameAdminFirstname = this.nameAdmin.firstName
      this.nameAdminLastname = this.nameAdmin.lastName

    })

   }
  }


