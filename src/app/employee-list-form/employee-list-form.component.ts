import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import { Employee } from '../employee';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { EmployeeService } from '../employee.service';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-employee-list-form',
  templateUrl: './employee-list-form.component.html',
  styleUrls: ['./employee-list-form.component.css']
})
export class EmployeeListFormComponent implements OnInit {

  private employees: Employee[];
  employeeForm: FormGroup;
  constructor(private employeeService: EmployeeService, private router: Router) {
    this.getAllEmployees();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);

  }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])
    });
    
    }

    getAllEmployees() {
      this.employeeService.findAll().subscribe(
        data  => {
          this.employees=data;
         console.log(this.employees);
        },
        err => {
          console.log(err);
        }
      );
    }
  
  deleteEmployee(employee: Employee) {
    if (employee) {
      //console.log('inside if deleteEmployee.....' + employee.id);
      this.employeeService.deleteEmployeeById(employee.id).subscribe(
        res => {
          let index=this.employees.indexOf(employee);
          this.employees.splice(index, 1);
          this.getAllEmployees();
          
          console.log('Deleted'+index);

        }
      );

    }
  }
  editEmployee(employee: Employee) {
    console.log(employee.name);
    this.employeeService.setter(employee);
    this.router.navigate(['edit']);

  }

}
