import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { Employee } from '../employee';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { EmployeeService } from '../employee.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dummyemployee-list',
  templateUrl: './dummyemployee-list.component.html',
  styleUrls: ['./dummyemployee-list.component.css']
})
export class DummyemployeeListComponent implements OnInit {

  private employees:Array<any>;
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
      this.employeeService.deleteEmployeeById(employee.id).subscribe(
        res => {
          this.getAllEmployees();
        });
    }
  }
  editEmployee(employee: Employee) {
    this.employeeService.setter(employee);
    this.router.navigate(['edit']);

  }


}
