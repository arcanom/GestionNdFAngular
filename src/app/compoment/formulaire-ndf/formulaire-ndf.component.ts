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
  myFiles : any[] =[]
  constructor(private fb : FormBuilder,
    private httpService : HttpServiceService,
    private route: Router ) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
      title: this.fb.control('',[Validators.required]),
      date: this.fb.control('',[Validators.required]),
      description: this.fb.control('',[Validators.required]),
      amount: this.fb.control('',[Validators.required]),
      categorie: this.fb.control('',[Validators.required]),
      image: this.fb.control('',[Validators.required])
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

   get categorie(){
    return this.form.get("categorie")
   }

   get image(){
    return this.form.get("image")
   }

   onFileChange(event : any){
    for( let i=0; i < event.target.files.length;i++){
      this.myFiles.push(event.target.files[i])
    }

   }

   submit(){
    if(this.form.valid){
      const formData = new FormData();

      for(let i=0;i < this.myFiles.length;i++){
        // console.log(this.myFiles[i])
        formData.append(this.myFiles[i].name,this.myFiles[i])
        console.log(formData.get(this.myFiles[i].name))
      }


    }
    // this.route.navigate(['/mesndf'])
    this.myFiles = []
   }

   deconnect(){
    this.route.navigate(['/connexion'])
  }

}
