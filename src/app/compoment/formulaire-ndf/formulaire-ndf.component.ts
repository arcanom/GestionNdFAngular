import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/service/http-service.service';

@Component({
  selector: 'app-formulaire-ndf',
  templateUrl: './formulaire-ndf.component.html',
  styleUrls: ['./formulaire-ndf.component.css']
})
export class FormulaireNdfComponent implements OnInit {
  form : FormGroup
  constructor(private fb : FormBuilder,
    private httpService : HttpServiceService,
    private route: Router ) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
      title: this.fb.control('',[Validators.required]),
      date: this.fb.control('',[Validators.required]),
      description: this.fb.control('',[Validators.required]),
      amount: this.fb.control('',[Validators.required])
    })
  }
   get title(){
    return this.form.get("title")
   }

   get date(){
    return this.form.get("date")
   }

   get description(){
    return this.form.get("description")
   }
   get amount(){
    return this.form.get("amount")
   }

   submit(){
    this.route.navigate(['/mesndf'])
   }
   
   deconnect(){
    this.route.navigate(['/connexion'])
  }

}
