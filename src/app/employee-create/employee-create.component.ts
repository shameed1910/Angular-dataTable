import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { EmployeeService } from '../employee.service';
import {RouterModule,Router} from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { commodity } from '../commodity-list/commodity';
import { FormArray } from '@angular/forms/src/model';
import { weightdesc } from '../weightdesc';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  private employees: Employee[];
  employeeForm :FormGroup;
  selectedCommodity: string;
  selectedWeightDesc: string;
  commodities=[
    new commodity(1,'Gold'),
    new commodity(2,'Silver'),
    new commodity(3,'Copper'),
  ];
  weightdescriptions=[
    new weightdesc(1,'Grains'),
    new weightdesc(2,'Grams'),
    new weightdesc(3,'KiloGrams'),
    new weightdesc(4,'Thola'),
  ];

  constructor(private employeeService:EmployeeService, private router:Router){
  }

  ngOnInit() {
    this.selectedCommodity=this.commodities[0].name;
    this.selectedWeightDesc=this.weightdescriptions[0].name;
  
    this.employeeForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(5)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      commodity: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      weightdesc: new FormControl('', Validators.required),
      rupees: new FormControl('', Validators.required),
      mobile: new FormControl('',Validators.required),
      purchase_date: new FormControl('', Validators.required)

    });


  }
  onInput($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }
  onInput1($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }
  addEmployee() {
  let isValid=  this.employeeForm.valid;
  console.log("isValid:::"+isValid)

    if (isValid){
      console.log('inside addemployee...');
    let employee:Employee=new Employee(null,
    this.employeeForm.controls['name'].value,
    this.employeeForm.controls['email'].value,
    this.employeeForm.controls['commodity'].value,
    this.employeeForm.controls['weight'].value,
    this.employeeForm.controls['weightdesc'].value,
    this.employeeForm.controls['rupees'].value,
    this.employeeForm.controls['mobile'].value,
    this.employeeForm.controls['purchase_date'].value);
    this.employeeService.createEmployee(employee).subscribe();

  }else if(!isValid){
    console.log("inside else:::"+isValid)

    this.employeeForm.setErrors({
        invalidLogin:true
      });
  }

  this.router.navigate(['list']);

}

get name(){
  return this.employeeForm.get('name');
}
get email(){
  return this.employeeForm.get('email');
}
get weight(){
  return this.employeeForm.get('weight');
}

}
