import { Injectable } from '@angular/core';
import { Employee } from "./employee";
import { Http, Response ,Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import {  HttpHeaders } from '@angular/common/http';


import {ActivatedRoute, Router} from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class EmployeeService {


  
  private apiUrl = '/demo/getUsers';
  private apiUrl1 = '/demo/insert';
  private apiUrl2 = '/demo';
  private apiUrl3 = '/demo/updateUser';

private employee:Employee;

  constructor(private http: Http, private authenticationService: AuthenticationService) {
  }
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', this.authenticationService.getToken()); 
  }

  findAll(): Observable<Employee[]>  {
    let headers= new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(this.apiUrl,{
      headers:headers
    })
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  createEmployee(employee :Employee): Observable<Employee>
  {
    console.log('inside createEmployee...'+employee.name);
    let headers= new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.post(this.apiUrl1, employee,{headers: headers})
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  deleteEmployeeById(id :number): Observable<boolean>
  {
    console.log('inside createEmployee...'+this.apiUrl2 + '/' + id);
    let headers= new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.delete(this.apiUrl2 + '/' + id,{headers: headers})
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Employee> {
    let headers= new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(this.apiUrl2 + '/' + id,{headers: headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    let headers= new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.put(this.apiUrl3, employee,{headers: headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  
  setter(employoyee:Employee){
    this.employee=employoyee;
  }
  getter(){
    return this.employee;
  }



}
