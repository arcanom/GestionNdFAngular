import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailsndf',
  templateUrl: './detailsndf.component.html',
  styleUrls: ['./detailsndf.component.css']
})
export class DetailsndfComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

}
