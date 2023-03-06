import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employeerequest } from '../model/employeerequest';
import { Ndfrequest } from '../model/ndfrequest';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  url : string = "http://localhost:8080/"

  constructor(private http : HttpClient) { }

  createNdF(ndf: Ndfrequest){
    return this.http.post(this.url+"expense-report",ndf)
  }
  createUpload(file: File, id:number){
    return this.http.post(this.url+"expense-report/upload/"+id,file)
  }

  createEmploye(employee : Employeerequest){
    return this.http.post(this.url+"employee",employee)
  }

  getAllCategories(){
    return this.http.get(this.url+"category")
  }

}
