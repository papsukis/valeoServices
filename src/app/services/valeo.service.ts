import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { baseUrl, byFamily, byLineofBusiness, byName, byRef, Credentials, credentials, tokenUrl } from './credentials';
import { concatMap } from 'rxjs/operators';
import { ValeoRequest } from '../models/request';
import { ValeoResponse } from '../models/response';
import { TokenStorageService } from './token-storage.service';
import { of } from 'rxjs';

export class token{
  token_type : string="";
  expires_in: number=300;
  access_token : string="";
}
@Injectable({
  providedIn: 'root'
})
export class ValeoService {

  credentials : Credentials;
  constructor(private http: HttpClient,private tokenStorage:TokenStorageService) {
    this.credentials=credentials;
  }

  getToken() : Observable<token>{
  if(!this.tokenStorage.isLogged())
  {
  var formData: any = new FormData();
  formData.append("client_id", this.credentials.clientId);
  formData.append("client_secret", this.credentials.password);
  formData.append("grant_type", this.credentials.grantType);

  return this.http.post<token>(tokenUrl,formData);
  }
  else{
    return of({token_type : 'Bearer',expires_in:300 , access_token :this.tokenStorage.getToken()})
  }
  }

  getByReference(parameters:ValeoRequest){

    let params = new HttpParams()
                    .set("_format","json")
                    .set("page",parameters.page)
                    .set("lang",parameters.lang)
    parameters.params.forEach(p=>{
      params= params.append("ref%5B%5D",p)
    })


    return this.getToken().pipe(concatMap(tok=>{
      if(!this.tokenStorage.isLogged()){
        this.tokenStorage.saveToken(tok.access_token);
      }
      const header = new HttpHeaders({
               'Accept' : 'application/json',
               'Authorization' : tok.token_type + ' ' + tok.access_token
             })
       return this.http.get<ValeoResponse>(baseUrl+byRef,{headers:header,params:params})
    }


    ))
  }
  getByProductName(parameters:ValeoRequest){
    let params = new HttpParams()
                    .set("_format","json")
                    .set("page",parameters.page)
                    .set("lang",parameters.lang)
    parameters.params.forEach(p=>{
      params= params.append("name%5B%5D",p)
    })
    return this.getToken().pipe(concatMap(tok=>{
      if(!this.tokenStorage.isLogged()){
        this.tokenStorage.saveToken(tok.access_token);
      }
      const header = new HttpHeaders({
               'Accept' : 'application/json',
               'Authorization' : tok.token_type + ' ' + tok.access_token
             })
       return this.http.get<ValeoResponse>(baseUrl+byName,{headers:header,params:params})
    }
    ))
  }
  getByProductFamily(parameters:ValeoRequest){
    let params = new HttpParams()
                    .set("_format","json")
                    .set("page",parameters.page)
                    .set("lang",parameters.lang)
    parameters.params.forEach(p=>{
      params= params.append("family%5B%5D",p)
    })
    return this.getToken().pipe(concatMap(tok=>{
      if(!this.tokenStorage.isLogged()){
        this.tokenStorage.saveToken(tok.access_token);
      }
      const header = new HttpHeaders({
               'Accept' : 'application/json',
               'Authorization' : tok.token_type + ' ' + tok.access_token
             })
       return this.http.get<ValeoResponse>(baseUrl+byFamily,{headers:header,params:params})
    }
    ))
  }
  getByLineOfBusiness(parameters:ValeoRequest){
    let params = new HttpParams()
                    .set("_format","json")
                    .set("page",parameters.page)
                    .set("lang",parameters.lang)
    parameters.params.forEach(p=>{
      params= params.append("lob%5B%5D",p)
    })
    return this.getToken().pipe(concatMap(tok=>{
      if(!this.tokenStorage.isLogged()){
        this.tokenStorage.saveToken(tok.access_token);
      }
      const header = new HttpHeaders({
               'Accept' : 'application/json',
               'Authorization' : tok.token_type + ' ' + tok.access_token
             })
       return this.http.get<ValeoResponse>(baseUrl+byLineofBusiness,{headers:header,params:params})
    }
    ))
  }
}

