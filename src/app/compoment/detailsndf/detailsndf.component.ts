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
      console.log(this.ndf)
    })
   }
  }


