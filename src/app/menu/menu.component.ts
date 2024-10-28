import { Component,  OnDestroy, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
import { Product } from './modules/modul';
import { Subject, takeUntil } from 'rxjs';
import { AnimateService } from '../shared/services/animate.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit, OnDestroy {
  fast_foods: Product[] = [];
  burger_sets:Product[]=[];
  beverages:Product[]=[];

  sub$= new Subject()

  quantity!:number;
  
  constructor(private menuService: MenuService) { }

 

  ngOnInit(): void {
       this.menuService.products$
    .pipe(takeUntil(this.sub$))
    .subscribe((products: Product[]) => {
      this.fast_foods = products.filter(product=>product.category==='fast_food');
      this.burger_sets = products.filter(product=>product.category==='burger_set');
      this.beverages = products.filter(product=>product.category==='beverage');
    })
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete()
  }

}
