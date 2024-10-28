import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[  
    FooterComponent,
    SidenavComponent
  ]
})
export class CoreModule { }
