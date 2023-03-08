import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employeelogin } from '../model/employeelogin';
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
  createUpload(file: any, id:number){
    return this.http.post(this.url+"expense-report/upload/"+id,file)
  }

  createEmploye(employee : Employeerequest){
    return this.http.post(this.url+"employee",employee)
  }

  login(username : Employeelogin){
    return this.http.post(this.url+"login",username) }

  getAllCategories(){
    return this.http.get(this.url+"category")
  }

  getAllNdf(){
    return this.http.get(this.url+"expense-report")
  }

  getNdfById(id:number){
    return this.http.get(this.url+"expense-report/"+id)
  }

  getNdfByEmployeeId(idEmployee:number){
    return this.http.get(this.url+"expense-report/employee/"+idEmployee)
  }

  getEmployeByUsername(search : any){
    return this.http.get(this.url+"employee/login/"+search)
  }

  getEmployeeById(id : any){
    return this.http.get(this.url+"employee/"+id)
  }

  updateStatusNdf(id:number,status: any){
    return this.http.patch(this.url+"expense-report/"+id,status)
  }


}
