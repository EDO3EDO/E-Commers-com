import { Component } from '@angular/core';
import { SIGN } from '../../Services/sign';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  constructor(private _SIGN:SIGN){

  }

MassegError:string = " "

token:any = " "

    Sign_In = new FormGroup({
      Email:new FormControl("",[Validators.required , Validators.email]) ,
      Password:new FormControl("", [Validators.required , Validators.minLength(8), Validators.maxLength(12)])
    })


    Signin(form:FormGroup){
      if(form.valid){
              this._SIGN.SignIn(form.value).subscribe({
        next:(e) => {console.log(e),

          this.token = localStorage.setItem("token" , e.token)

          ,this._SIGN.IsLogedIn.next(true)

        },
        error:(response) => {console.log(response),
          this.MassegError = response
        }
      })
      }
    }




}
