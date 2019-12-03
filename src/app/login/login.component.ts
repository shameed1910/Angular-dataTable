import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false


  constructor(
  private loginservice:AuthenticationService,private router: Router) {

   }

  ngOnInit() {
  }
  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data=>
    
     {
      this.router.navigate(['/list'])

      this.invalidLogin = false
  
    },
    error => {
      this.invalidLogin = true
    }
  )
  );
}
  
}
