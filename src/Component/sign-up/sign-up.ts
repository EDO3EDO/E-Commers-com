import { Component } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { SIGN } from '../../Services/sign';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {

  constructor(private _SIGN:SIGN , private _Router:Router){}

  MassgeError:any = " "



Sign_Up =new FormGroup({
  name:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
  Email:new  FormControl("",[Validators.required,Validators.email]),
  Password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(12),Validators.pattern(/^[A-z].{5,}$/)]),
      rePassword:new FormControl("",[Validators.required ,Validators.pattern(/^[A-z].{5,}$/) ]),
  Phone:new FormControl("",[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
})


Signup(form:FormGroup){


  this._SIGN.SignUp(form.value).subscribe({
    next:(e)=> {console.log(e),
      this._Router.navigate([('/SignIn')])
    },
    error:(err)=>{console.log(err),
      this.MassgeError = err
    }
  })


}


}
