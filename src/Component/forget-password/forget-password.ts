import { Component } from '@angular/core';
import { SIGN } from '../../Services/sign';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {

  constructor( private _SIGN:SIGN){}

Forgetpassword(Form:FormGroup){


  this._SIGN.ForgetPassword(Form.value).subscribe({
    next:(response) => {console.log(response)}
  })




}


}
