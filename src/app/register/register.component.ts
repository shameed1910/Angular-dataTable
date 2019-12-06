import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { EmployeeService } from '../employee.service';
import { UserRegister } from '../userRegister';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    
    private userService: UserService

  ) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({

      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });

  }
  addUser() {
    let isValid = this.registerForm.valid;
    console.log("isValid:::" + isValid)

    if (isValid) {
      console.log('inside add user...');
      let user: UserRegister = new UserRegister(null,
        this.registerForm.controls['firstname'].value,
        this.registerForm.controls['lastname'].value,
        this.registerForm.controls['name'].value,
        this.registerForm.controls['password'].value,
        this.registerForm.controls['role'].value);

        this.userService.createUser(user).subscribe();

    } else if (!isValid) {
      console.log("inside else:::" + isValid)

      this.registerForm.setErrors({
        invalidLogin: true
      });
    }

    this.router.navigate(['login']);

  }
}




