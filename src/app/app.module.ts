import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { EmployeeService } from './employee.service';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


//import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core/src/metadata/directives';
import { EmployeeUpdateFormComponent } from './employee-update-form/employee-update-form.component';
import { EmployeeListFormComponent } from './employee-list-form/employee-list-form.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { DummyemployeeListComponent } from './dummyemployee-list/dummyemployee-list.component';
import { CommodityListComponent } from './commodity-list/commodity-list.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { AuthenticationService } from './authentication.service';
import { BasicAuthHtppInterceptorService } from './basicAuthentication.service';
import { HttpClientModule } from '@angular/common/http/src/module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { FileDownloadComponent } from './file-download/file-download.component';
import { FileDownloadService } from './file-download.service';

const approutes:Routes=[
  {path:'home', component:EmployeeHomeComponent},
  {path:'create', component:EmployeeCreateComponent,canActivate:[AuthGaurdService]},
  {path:'edit', component:EmployeeUpdateFormComponent},
  {path:'list', component:EmployeeListFormComponent,canActivate:[AuthGaurdService]},
  {path:'dummy', component:DummyemployeeListComponent},
  {path:'commodity', component:CommodityListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  { path: 'download', component: FileDownloadComponent},
  { path: 'register', component: RegisterComponent}


 



];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeUpdateFormComponent,
    EmployeeListFormComponent,
    EmployeeCreateComponent,
    DummyemployeeListComponent,
    CommodityListComponent,
    EmployeeHomeComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    FileDownloadComponent
    
    
    
  ],
  imports: [
    BrowserModule, DataTablesModule,HttpModule,
    FormsModule, ReactiveFormsModule,
    BsDatepickerModule.forRoot(),

    RouterModule.forRoot(approutes)

  ],
  providers: [AuthGaurdService,AuthenticationService,,UserService,FileDownloadService,
    {provide:HTTP_INTERCEPTORS,
    useClass:BasicAuthHtppInterceptorService,
    multi:true
  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
