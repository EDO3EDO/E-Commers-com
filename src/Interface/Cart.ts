import { Catigores } from './Catigores';
import { IProduct } from './IProduct';
import { ProductDetiles } from './productDetiles';
import { ProductsCart } from './products';
export interface ICart {
products:ProductDetiles[],
Catigores:Catigores,
totalCartPrice:number

}
