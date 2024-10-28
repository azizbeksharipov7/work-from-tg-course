import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared/shared.module';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../core/home/home.component';
import { CardComponent } from './cart/card.component';


const routes: Routes = [
  {path:'', component:MenuComponent  }
];

@NgModule({
  declarations: [MenuComponent, CardComponent,],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MenuModule { }
