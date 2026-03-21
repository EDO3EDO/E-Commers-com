import { Routes } from '@angular/router';
import { Home } from '../Component/home/home';
import { Cart } from '../Component/cart/cart';
import { Products } from '../Component/products/products';

import { Brands } from '../Component/brands/brands';
import { SignIn } from '../Component/sign-in/sign-in';
import { SignOut } from '../Component/sign-out/sign-out';
import { SignUp } from '../Component/sign-up/sign-up';
import { ForgetPassword } from '../Component/forget-password/forget-password';
import { ProductDetilsComponent } from '../Component/ProductDetils/ProductDetils.component';
import { HomeCatigoresComponent } from '../Component/Home-Catigores/Home-Catigores.component';
import { MainSliderComponent } from '../Component/main-slider/main-slider.component';

export const routes: Routes = [


{path:"" , redirectTo:"Home" , pathMatch:"full" },
{path:"Home" , component:Home},
{path:"Cart" , component:Cart},
{path:"Products" , component:Products},
{path:"Home-Catigores" , component:HomeCatigoresComponent},
{path:"SignIn" , component:SignIn},
{path:"SignOut" , component:SignOut},
{path:"SignUp" , component:SignUp},
{path:"ForgetPassword" , component:ForgetPassword},
{path:"ProudctDitels/:id" , component:ProductDetilsComponent},
{path:"main-slider" , component:MainSliderComponent},












];
