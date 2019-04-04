import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _http:HttpClient) { }


  isAuthenticated(){
    return (localStorage.getItem('token') !== "" ? true : false);
  }

  getToken(){
    return this._http.get('http://localhost:3000/authToken');
  }

  getCreds(creds) {
    return this._http.get('http://localhost:3000/credentials');
  }

 
}
