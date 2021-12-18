import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import decode from 'jwt-decode';


const TOKEN_KEY = 'valeo-token';
const USER_KEY = 'auth-user';
interface token{

    aud:string;
    jti:string;
    nbf:string;
    exp:string;
    sub:string;
    scope:string[];

}
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {


  constructor() {

   }

  signOut(): void {
    localStorage.clear();
  }


  public saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken() : string  {
    return localStorage.getItem(TOKEN_KEY)!;
  }


  // public saveUser(user): void {
  //   window.sessionStorage.removeItem(USER_KEY);
  //   window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  // }
  public isLogged(){
    const token = localStorage.getItem(TOKEN_KEY);
    if(token)
    {
      if(this.isTokenExpired(token))
        {
          this.signOut();
          return false
        }
        return true;
    }

    return false;



    // if(sessionStorage.getItem(TOKEN_KEY))
    // return true;

    // return false;
  }
  getTokenExpirationDate(token: string): Date | null{
    const decoded :token = decode(token);
    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(parseInt(decoded.exp));
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date : Date = this.getTokenExpirationDate(token)!;
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  public getHeaders():any{
    let reqHeaders;
    const token = this.getToken();
    if (token != null) {
       let header = new HttpHeaders({
        'Content-Type'                : 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Authorization' : 'Bearer ' + token});
      reqHeaders = {
        headers : header
      }
    }else {
      reqHeaders= {
        headers: new HttpHeaders({
        'Content-Type'                : 'application/json',
        'Access-Control-Allow-Origin' : '*'})
      };
    }
    return reqHeaders;
  }
}
function jwt_decode(token: string) {
  throw new Error('Function not implemented.');
}

