import { Brand } from "./brand";
import { Catigores } from "./Catigores";
import { Supcatigory } from "./Supcatigory";

export interface IProduct {
  sold:number;
  images:string[];
  subcategory:Supcatigory;
  ratingsQuantity:number;
  _id:string;
  title:string;
  description:string;
  quantity:number;
  price:number;
  imageCover:string;
  category:Catigores;
  brand:Brand;
  ratingsAverage:number;

}
