import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenStorageService } from './services/token-storage.service';
import { ValeoService } from './services/valeo.service';
import { credentials, tokenUrl } from './services/credentials';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalInterceptorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {




  //   }
  //   else if(this.userService.isLogged()){

  //     console.log(this.userService.isTokenExpired())
  //     header = new HttpHeaders({
  //       'Accept' : 'application/json',
  //       'Authorization' : "Bearer "+this.userService.getToken()
  //     })
  //     const cloned = request.clone({
  //       headers: header
  //   });
  //     return next.handle(cloned).pipe(
  //       catchError((error) => {
  //         console.log(error)
  //         return throwError(error.error.message);
  //       }))

  //   }
  //   else
  //   {return next.handle(request).pipe(
  //     catchError((error) => {
  //       console.log(error)
  //       return throwError(error.error.message);
  //     }))
  // ;}
  // }
  return next.handle(request).pipe(
          catchError((error) =>{
            console.log(error)
            if(error.status==404){
              this.toastr.error(error.error.message)
            }
            if(error.status==403){
              this.toastr.error(error.error.message)
            }
            if(error.status==402){
              this.toastr.error(error.error.message)
            }
            return throwError(error.error.message);
          } ))}
}
