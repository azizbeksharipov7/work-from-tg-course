import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { ProductsResolver } from '../shared/resolver/products.resolver';

const routes: Routes = [
  {path:'', component:CartComponent, pathMatch:'full', resolve:{products:ProductsResolver}  }
];

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CartModule { }
