import { Products } from './../products/products';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/Cart.service';
import { ICart } from '../../Interface/Cart';
import { ProductDetiles } from '../../Interface/productDetiles';
import { ProductsCart } from '../../Interface/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  constructor(private _Cart:CartService , private _cdr:ChangeDetectorRef){}


  Cart?:ICart;
  cartProducts?: ProductDetiles[]

  ngOnInit(): void {


    this._Cart.GetCart().subscribe({
  next: (respons) => {
    this.Cart = respons.data,
    this.cartProducts = respons.data.products;
    console.log(respons)
    this._cdr.detectChanges();
  },
  error: (e) => {console.log(e.data)
  }
})

  }

  deleteCart(id:string){
    this._Cart.deletCart(id).subscribe({
      next:(respons) => {
        this.Cart = respons.data,
        this.cartProducts  = respons.data.products;
        this._cdr.detectChanges()
      }
    })
  }



  UpdateCart(id:string , count:number){
    this._Cart.UpdaetCart(id , count).subscribe({
      next:(respons) => {
            this.Cart = respons.data,
            this.cartProducts = respons.data.products;
            console.log(respons)
            this._cdr.detectChanges();
      }
    })
  }







}
