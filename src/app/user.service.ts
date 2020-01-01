import { Injectable } from '@angular/core';
import { Employee } from "./employee";
import { Http, Response ,Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import {  HttpHeaders } from '@angular/common/http';


import {ActivatedRoute, Router} from '@angular/router';
import { AuthenticationService, User } from './authentication.service';
import { UserRegister } from './userRegister';


@Injectable()
export class UserService {


  private apiUrl = 'http://localhost:8081/demo/register';

private user:UserRegister;

  constructor(private http: Http,private authenticationService:AuthenticationService) {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', this.authenticationService.getToken()); 
  }
  createUser(user :UserRegister): Observable<UserRegister>
  {
    console.log('inside create user...'+user. name);
    let headers= new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.post(this.apiUrl, user,{headers: headers})
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  setter(user:UserRegister){
    this.user=user;
  }
  getter(){
    return this.user;
  }



}
