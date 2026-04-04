import { ChangeDetectorRef, Component } from '@angular/core';
import { SIGN } from '../../Services/sign';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  constructor(private _SIGN:SIGN , private _Router:Router , private cdr:ChangeDetectorRef){

  }

MassegError:string = ""
isloding:boolean = false
token:any = " "

    Sign_In = new FormGroup({
      email:new FormControl("",[Validators.required , Validators.email]) ,
      password:new FormControl("", [Validators.required , Validators.minLength(8), Validators.maxLength(12)])
    })


    Signin(form:FormGroup){
      if(form.valid){
        this.isloding = true;
              this._SIGN.SignIn(form.value).subscribe({
        next:(e) => {console.log(e),
          this.isloding = false;
          this.token = localStorage.setItem("token" , e.token)
          ,this._SIGN.IsLogedIn.next(true),
          this._Router.navigate([('/Home')])
        },
        error:(response) => {
          this.MassegError = response.error.message;
          this.isloding = false;
          this.cdr.detectChanges();
          console.log(this.MassegError)
        }
      })
      }
    }
}
