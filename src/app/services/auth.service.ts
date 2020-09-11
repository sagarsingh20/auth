import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {    
    //IsUser Logged In or Not
    const loginData= sessionStorage.getItem('loginData')
    if(loginData){
      return true;
    }else{
      return false;
    }
    
  }
  // public async login(postData){
  //   // LOGIN API WORKS

  //   // const responseData={
  //   //   'name': "Sagar",
  //   //   'id': '123',
  //   //   'token': '123QDFF123'
  //   // }

  //   await sessionStorage.setItem('loginData', JSON.stringify(responseData));
  //   return true;
  // }
 
  public logout(){
    console.log("abc")
    //Clear the Data
     sessionStorage.removeItem("loginData");
     sessionStorage.clear();
    return true;
  }
}
