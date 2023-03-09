import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { Ndfrequest} from 'src/app/model//ndfrequest'
import { Ndfresponse } from 'src/app/model/ndfresponse';
import { StorageService } from 'src/app/service/storage.service';
@Component({
  selector: 'app-formulaire-ndf',
  templateUrl: './formulaire-ndf.component.html',
  styleUrls: ['./formulaire-ndf.component.css']
})
export class FormulaireNdfComponent implements OnInit {
  form : FormGroup
  myFiles : any[] =[]
  ndf : Ndfrequest
  categories: any
  data : any
  id : any
  idEmployee : any
  userdetails : any
  idNdf : number
  formData : any
  role : any
  constructor(private fb : FormBuilder,
    private httpService : HttpServiceService,
    private route: Router,
    private storageService : StorageService ) { }


    getCategories(){
      this.httpService.getAllCategories().subscribe(x=>{
        this.categories = x;
        console.log(this.categories)
      })
    }

  ngOnInit(): void {
    this.idEmployee = localStorage.getItem("id")
    this.userdetails =  JSON.parse(sessionStorage.getItem("userdetails"))
    this.role =  localStorage.getItem("role")
    this.getCategories()
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

      // console.log(this.form.value)
      // console.log(this.myFiles)

      if(this.form.valid){

          this.ndf = {
            title : this.form.value.title,
            description: this.form.value.description,
            amount : this.form.value.amount,
            date : this.form.value.date,
            status: "INPROGRESS",
            admin: 0,
            employee: this.idEmployee,
            category: this.form.value.categorie
          }

           console.log(this.ndf)
          this.httpService.createNdF(this.ndf).subscribe(x => {
              this.data = x
              this.id = this.data.id
              localStorage.setItem("idNdf",this.id)

          })

          this.idNdf = JSON.parse(localStorage.getItem("idNdf"))
          // console.log(this.idNdf)
          for(let i=0;i < this.myFiles.length;i++){
            console.log(this.myFiles[i])
            this.formData = new FormData()
            this.formData.append("file",this.myFiles[i])
           this.httpService.createUpload(this.formData,this.idNdf).subscribe({
            next: (y) =>{
              console.log(y)
            },
            error:(err) => console.log(err.message)
           })
           this.formData = 0
         }






    }
    this.myFiles = []
    this.route.navigate(['/mesndf'])
   }

   deconnect(){
    sessionStorage.clear()
    this.storageService.clear()
    this.route.navigate(['/connexion'])

  }

}
