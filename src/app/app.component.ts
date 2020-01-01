import { Component, Injectable } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { Http, Response } from "@angular/http";

import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Employee } from './employee';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AuthGaurdService } from './auth-gaurd.service';
import { BasicAuthHtppInterceptorService } from './basicAuthentication.service';
import { FileDownloadService } from './file-download.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthGaurdService,EmployeeService,AuthenticationService,BasicAuthHtppInterceptorService
  ,FileDownloadService]

})


export class AppComponent implements OnInit {
  constructor(private employeeService: EmployeeService,private loginService:AuthenticationService,
  private basicAuthService:BasicAuthHtppInterceptorService) {
  }

  ngOnInit() {


  }


}
