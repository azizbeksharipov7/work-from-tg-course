import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { MenuService } from '../../menu/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers:[{provide:CartService, useClass:MenuService }],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  text: any="My H1"

  ngOnInit(): void {
    
  }
}
     
  
