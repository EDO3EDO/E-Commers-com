import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductCloneComponent } from "../Product-clone/Product-clone.component";
import { RouterOutlet } from "@angular/router";
import { IProduct } from '../../Interface/IProduct';
import { Product } from '../../Services/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [ProductCloneComponent, RouterOutlet],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit , OnDestroy {

  constructor(private _Products:Product , private cd:ChangeDetectorRef){}



TheProduct:IProduct [] = []
Prof!:Subscription;



ngOnInit(): void {


this.Prof = this._Products.GETProducts().subscribe({
  next:(response) => {console.log(response),
    this.TheProduct = response.data ,
    this.cd.detectChanges()
  }
})
}





  ngOnDestroy(): void {
    this.Prof.unsubscribe()
  }

}

