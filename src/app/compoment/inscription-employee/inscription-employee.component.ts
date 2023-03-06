import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employeerequest } from 'src/app/model/employeerequest';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-inscription-employee',
  templateUrl: './inscription-employee.component.html',
  styleUrls: ['./inscription-employee.component.css']
})
export class InscriptionEmployeeComponent implements OnInit {
  form : FormGroup
  employee :  Employeerequest
  constructor(private fb : FormBuilder,
    private route : Router,
    private storageService :  StorageService,
    private httpService : HttpServiceService) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
      name: this.fb.control('',[Validators.required]),
      firstName: this.fb.control('',[Validators.required]),
      password: this.fb.control('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}')])
    })
  }

  get name(){
    return this.form.get("name")
  }

  get firstName(){
    return this.form.get("firstName")
  }

  get password(){
    return this.form.get("password")
  }

  submit(){
    if(this.form.valid){
        this.employee = {
          lastName: this.form.value.name,
          firstName: this.form.value.firstName,
          password: this.form.value.password
        }
        this.httpService.createEmploye(this.employee).subscribe(x=>{
          console.log(x)
        })
    }
    // this.route.navigate(['/mesndf'])
  }
  deconnect(){
    this.route.navigate(['/connexion'])
  }

}
