import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employeelogin } from 'src/app/model/employeelogin';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
form : FormGroup
employee : Employeelogin
model : any
data : any
token: any
  constructor(private fb : FormBuilder,
    private route : Router,
    private storageService :  StorageService,
    private httpService : HttpServiceService )
    { }

  ngOnInit(): void {
    this.form =  this.fb.group({
      username: this.fb.control('',[Validators.required]),
      password: this.fb.control('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    })
  }

  get username(){
    return this.form.get("username")
  }

  get password(){
    return this.form.get("password")
  }

  connect(){
    if(this.form.valid){
      this.employee = {
        username : this.form.value.username,
        password: this.form.value.password
      }
      this.httpService.login(this.employee).subscribe((responseData)=>{

      this.data = responseData
      this.token = this.data.token
      console.log(this.token)
      window.sessionStorage.setItem("Authorization",this.token);
      window.sessionStorage.setItem("userdetails",JSON.stringify(this.data));
      this.route.navigate(['/mesndf'])
      })
    }

  }

}
