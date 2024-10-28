import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './auth/guards/auth-guard/auth.guard';
import { AuthCanloadGuard, AuthCantloadGuard } from './auth/guards/auth-canload-guard/auth-canload-guard.guard';


const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'',  loadChildren:()=>import('./core/core.module').then(m=>m.CoreModule) },
  {path: 'menu', loadChildren:()=> import('./menu/menu.module').then(m => m.MenuModule) },
  {path: 'contact', loadChildren:()=> import('./contact/contact.module').then(m => m.ContactModule) },
  {path: 'cart', loadChildren:()=> import('./cart/cart.module').then(m => m.CartModule) },
  {path: 'profile', canMatch:[AuthCanloadGuard], loadChildren:()=> import('./profile/profile.module').then(m => m.ProfileModule) },
  {path: 'login', canMatch:[AuthCantloadGuard], loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy :PreloadAllModules}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
