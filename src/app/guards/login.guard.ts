import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public authServices: AuthService, public router: Router){}
  
  canActivate() : boolean{
    if(this.authServices.isAuthenticated()){
      this.router.navigate(['/dashboard'])
      return false;
    }
    return true;
  }
  
}
