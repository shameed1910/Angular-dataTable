import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { EmployeeService } from '../employee.service';
import {RouterModule,Router} from '@angular/router';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-employee-update-form',
  templateUrl: './employee-update-form.component.html',
  styleUrls: ['./employee-update-form.component.css']
})
export class EmployeeUpdateFormComponent implements OnInit {

  private employee: Employee;

  employeeForm :FormGroup;
  constructor(private employeeService:EmployeeService, private router:Router){
  }

  ngOnInit() {
    this.employee=this.employeeService.getter();




  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employee).subscribe((employee)=>{
    },(error)=>{

    });
    this.router.navigate(['list']);

  }

  
  
}
