import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-traitementndf',
  templateUrl: './traitementndf.component.html',
  styleUrls: ['./traitementndf.component.css']
})
export class TraitementndfComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  deconnect(){
    this.route.navigate(['/connexion'])
  }
}
