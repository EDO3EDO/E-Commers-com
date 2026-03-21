import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Product {

  constructor(private _HttpClint:HttpClient){}




  GETProducts():Observable<any>{
return this._HttpClint.get("https://ecommerce.routemisr.com/api/v1/products")
  }



  GetDitels(id:string):Observable<any>{
return this._HttpClint.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }



GetAllCatigores():Observable<any>{

  return this._HttpClint.get("https://ecommerce.routemisr.com/api/v1/categories")

}






}
