import { Component, OnInit } from '@angular/core';
import { Product } from '../../Services/product';
import { Catigores } from '../../Interface/Catigores';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-Home-Catigores',
  templateUrl: './Home-Catigores.component.html',
  imports:[CarouselModule],
  styleUrls: ['./Home-Catigores.component.css']
})
export class HomeCatigoresComponent implements OnInit {

  constructor(private _Product:Product ) { }


AllCatigores:Catigores[] = []



  ngOnInit() {


this._Product.GetAllCatigores().subscribe({

next:(response) => {console.log(response),

  this.AllCatigores = response.data

}})
  }




  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:2000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: false

  }




}
