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
  ngOnInit(): void {
   this.id = this.activatedRoute.snapshot.params['id']
    this.HttpService.getNdfById(this.id).subscribe(x => {
      this.ndf =  x
      console.log(this.ndf)
    })
   }
  }


