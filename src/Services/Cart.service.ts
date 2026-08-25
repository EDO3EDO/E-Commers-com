import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

constructor(private _HttpClient:HttpClient) { }


headers:any = {token:localStorage.getItem('token')}


AddToCart(id:string):Observable<any>{

return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart" , {productId: id} , {headers:this.headers})
}


UpdaetCart(id:string , count:number):Observable<any>{

  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {count:count} , {headers:this.headers})
  }


deletCart(id:string):Observable<any>{

  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {headers:this.headers})
  }


GetCart():Observable<any>{
  return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart" ,
    {headers:this.headers}
  )
}

}
