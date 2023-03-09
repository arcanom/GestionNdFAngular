import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  user : any

  constructor(private router : Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let httpHeaders = new HttpHeaders();
    if(sessionStorage.getItem('userdetails')){
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    if(this.user && this.user.password && this.user.username && sessionStorage.getItem("Authorization") == null){
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.user.username + ':' + this.user.password));
    } else {
      let authorization = sessionStorage.getItem("Authorization");
      if(authorization){
        httpHeaders = httpHeaders.append("Authorization",authorization)
  
      }
    }
    httpHeaders =  httpHeaders.append('X-Requested-With', 'XMLHttpRequest')

    const xhr = request.clone({
      headers: httpHeaders
    });
    return next.handle(xhr).pipe(tap(
      (error:any)=>{
        if(error instanceof HttpErrorResponse){
          if(error.status !== 401){
            return;
          }
          this.router.navigate(['/mesndf'])
        }
      }));
  }
}
