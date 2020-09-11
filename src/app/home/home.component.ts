import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public authServices: AuthService) { }

  ngOnInit() {  }
  clear(){
    //console.log("qwer")
    if(this.authServices.logout()){
      //console.log("sdsms")
      this.router.navigate(['/login'])
    }
  }

}
