import { Product } from './../../Services/product';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Interface/IProduct';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ProductDetils',
  templateUrl: './ProductDetils.component.html',
  imports:[CarouselModule],
  styleUrls: ['./ProductDetils.component.css']
})
export class ProductDetilsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute ,private _Product:Product ,private cd:ChangeDetectorRef) { }


  product_?:string|null;
  ProductDetils?:IProduct;







  ngOnInit() {

this._ActivatedRoute.paramMap.subscribe((param) => {this.product_ = param.get('id')})

  if(this.product_ != null){
  this._Product.GetDitels(this.product_).subscribe({
    next:(response) => {this.ProductDetils = response.data ,
      this.cd.detectChanges()
    },
  })
}}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout:2000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        dots: true,
        items: 1
      },
      400: {
        dots: true,
        items: 1
      },
      768: {
        dots: true,
        items: 1
      },
      940: {
        dots: true,
        items: 1
      }
    },
    nav: false

  }
}
