import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SIGN } from '../../Services/sign';


@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

constructor(private _SIGN:SIGN , private cdr:ChangeDetectorRef){}



LoggedUser:boolean = false

ngOnInit(): void {


    this._SIGN.IsLogedIn.subscribe({
      next:(response) => { this.LoggedUser = response;
      }
    })


  }














Signout(){



  this._SIGN.SignOut()


}



}
