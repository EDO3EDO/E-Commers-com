import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../Interface/IProduct';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-Product-clone',
  templateUrl: './Product-clone.component.html',
  styleUrls: ['./Product-clone.component.css'],
  imports: [RouterLink]
})
export class ProductCloneComponent implements OnInit {

  constructor() { }


  @Input() Product!:IProduct


  ngOnInit() {
  }

}
