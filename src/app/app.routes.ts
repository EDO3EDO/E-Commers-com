import { Routes, CanActivateFn } from '@angular/router';
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
import { authGuard } from '../Guards/auth-guard';
import { noAuthGuard } from '../Guards/no-auth-guard';

export const routes: Routes = [


{path:"" , redirectTo:"Home" , pathMatch:"full" },
{path:"Home" ,canActivate:[authGuard] , component:Home},
{path:"Cart" ,canActivate:[authGuard] , component:Cart},
{path:"Products",canActivate:[authGuard] , component:Products},
{path:"Home-Catigores", component:HomeCatigoresComponent},
{path:"SignIn" , canActivate:[noAuthGuard], component:SignIn},
{path:"SignOut" , canActivate:[noAuthGuard], component:SignOut},
{path:"SignUp" , canActivate:[noAuthGuard], component:SignUp},
{path:"ForgetPassword" , canActivate:[noAuthGuard], component:ForgetPassword},
{path:"ProudctDitels/:id" , canActivate:[authGuard], component:ProductDetilsComponent},
{path:"main-slider" , canActivate:[authGuard], component:MainSliderComponent},












];
