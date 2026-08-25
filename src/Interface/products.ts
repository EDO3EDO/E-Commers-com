import { Brand } from "./brand";
import { Catigores } from "./Catigores";
import { Supcatigory } from "./Supcatigory";


export interface ProductsCart {
  _id:string;
  title:string;
  imageCover:string;
  price:number;
  category:Catigores;
  brand:Brand;
  ratingsAverage:number;
}























