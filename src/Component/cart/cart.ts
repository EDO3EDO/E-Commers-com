import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/Cart.service';
import { ICart } from '../../Interface/Cart';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  constructor(private _Cart:CartService){}


  Cart?:ICart;

  ngOnInit(): void {


    this._Cart.GetCart().subscribe({
  next: (respons) => {this.Cart = respons.data,
    console.log(respons)
  },
  error: (e) => {console.log(e.data)
  }
})


  }








}
