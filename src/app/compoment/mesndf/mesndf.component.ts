import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesndf',
  templateUrl: './mesndf.component.html',
  styleUrls: ['./mesndf.component.css']
})
export class MesndfComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  deconnect(){
    this.route.navigate(['/connexion'])
  }

}
