import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-historiquendf',
  templateUrl: './historiquendf.component.html',
  styleUrls: ['./historiquendf.component.css']
})
export class HistoriquendfComponent implements OnInit {
ndfs : any
  constructor(private route: Router, private httpService : HttpServiceService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.getAllNdf()
  }


  getAllNdf(){
    this.httpService.getAllNdf().subscribe(x => {
      this.ndfs = x
      console.log(this.ndfs)
    })
}
  deconnect(){
    sessionStorage.clear()
    this.storageService.clear()
    this.route.navigate(['/connexion'])
  }



}
