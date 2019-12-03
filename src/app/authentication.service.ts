import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Http, Response } from "@angular/http";

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}

@Injectable()
export class AuthenticationService{
    constructor(private http:Http) { }
    authenticate(username:string,  password:string): Observable<Response>{
      const credentials = {username: username, password: password};

      return this.http.post('http://localhost:8081/demo/authenticate',credentials).pipe(
       map(
         userData => {
          sessionStorage.setItem('username',username);
          let data = userData.json();
          console.log("username::"+username);
          console.log("token::"+data.token);

          let tokenStr= 'Bearer '+data.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
         }
       )
  
      );
    }
    getToken(): String {
      var currentUser = sessionStorage.getItem('username');
      var token = sessionStorage.getItem('token');
      return token ? token : "";
    }
isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
  }

}