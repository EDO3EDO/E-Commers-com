import { ForgetPassword } from './../Component/forget-password/forget-password';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SIGN {

  constructor(private _HttpClient:HttpClient , private _Router:Router){
    if (localStorage.getItem('token') !== null) {
    this.IsLogedIn.next(true);
  }}

  IsLogedIn = new BehaviorSubject<boolean>(false) ;


SignIn(form:object):Observable<any>{
  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",form)
}


SignUp(form:object):Observable<any>{
  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup", form)
}


SignOut(){

  localStorage.removeItem('token')
  this.IsLogedIn.next(false);
  this._Router.navigate([('/SignIn')])
}

ForgetPassword(Form:Object){

    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",Form)

}
}



