import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../Services/product';
import { IProduct } from '../../Interface/IProduct';
import { Subscription } from 'rxjs';
import { RouterLink, RouterOutlet } from "@angular/router";
import { ProductCloneComponent } from "../Product-clone/Product-clone.component";
import { HomeCatigoresComponent } from "../Home-Catigores/Home-Catigores.component";
import { MainSliderComponent } from "../main-slider/main-slider.component";

@Component({
  selector: 'app-home',
  imports: [ProductCloneComponent, RouterOutlet, HomeCatigoresComponent, MainSliderComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit , OnDestroy {


  constructor(private _Product:Product , private cd:ChangeDetectorRef){}


TheProduct:IProduct [] = []
perfect!:Subscription ;



  ngOnInit(): void {
    this.perfect =  this._Product.GETProducts().subscribe({
      next:(response) => {console.log(response),
        this.TheProduct = response.data ,
        this.cd.detectChanges()
      },
      error:(response) => {console.log(response)}
    })
  }


  ngOnDestroy(): void {
    this.perfect.unsubscribe()
  }






}
