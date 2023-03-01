import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historiquendf',
  templateUrl: './historiquendf.component.html',
  styleUrls: ['./historiquendf.component.css']
})
export class HistoriquendfComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  deconnect(){
    this.route.navigate(['/connexion'])
  }

}
