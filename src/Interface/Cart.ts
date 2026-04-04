import { Catigores } from './Catigores';
import { IProduct } from './IProduct';
export interface ICart {
IProduct:IProduct[],
Catigores:Catigores,
totalCartPrice:number

}
