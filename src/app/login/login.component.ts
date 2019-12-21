import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  loginForm: FormGroup;


  constructor(private loginservice: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  }
  checkLogin() {
    (this.loginservice.authenticate(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).subscribe(
      data => {
        this.router.navigate(['/home'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
      }
    )
    );
  }
}
