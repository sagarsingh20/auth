import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup

  constructor(public router: Router, public fb: FormBuilder, public authServices: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup ({
      'username' : new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }
  onSubmit(){
    console.log(this.loginForm.value);
    sessionStorage.setItem('loginData',JSON.stringify(this.loginForm.value))
    
      
      this.router.navigate(['/dashboard'])
    
    
  }

}
