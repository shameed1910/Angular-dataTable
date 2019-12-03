import { Injectable } from '@angular/core';
import { Employee } from "./employee";
import { Http, Response ,Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import {  HttpHeaders } from '@angular/common/http';


import {ActivatedRoute, Router} from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class EmployeeService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': this.authenticationService.getToken()
    });
  
  private apiUrl = 'http://localhost:8081/demo/getUsers';
  private apiUrl1 = 'http://localhost:8081/demo/insert';
  private apiUrl2 = 'http://localhost:8081/demo';
  private apiUrl3 = 'http://localhost:8081/demo/updateUser';

private employee:Employee;

  constructor(private http: Http, private authenticationService: AuthenticationService) {
  }

  findAll(): Observable<Employee[]>  {
    return this.http.get(this.apiUrl,{headers: this.headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  createEmployee(employee :Employee): Observable<Employee>
  {
    console.log('inside createEmployee...'+employee.name);

    return this.http.post(this.apiUrl1, employee,{headers: this.headers})
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  deleteEmployeeById(id :number): Observable<boolean>
  {
    console.log('inside createEmployee...'+this.apiUrl2 + '/' + id);

    return this.http.delete(this.apiUrl2 + '/' + id,{headers: this.headers})
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Employee> {
    return this.http.get(this.apiUrl2 + '/' + id,{headers: this.headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put(this.apiUrl3, employee,{headers: this.headers})
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
