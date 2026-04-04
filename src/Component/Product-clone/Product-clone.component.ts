import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../Interface/IProduct';
import { RouterLink } from "@angular/router";
import { Cart } from '../cart/cart';
import { CartService } from '../../Services/Cart.service';

@Component({
  selector: 'app-Product-clone',
  templateUrl: './Product-clone.component.html',
  styleUrls: ['./Product-clone.component.css'],
  imports: [RouterLink]
})
export class ProductCloneComponent {

  constructor(private _Cart:CartService) { }


  @Input() Product!:IProduct


  AddToCart(id:string){


    this._Cart.AddToCart(id).subscribe({
  next: (e) => {console.log(e)
  },
  error: (e) => {console.log(e)}
})

  }






}
