import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AnimateService } from '../../shared/services/animate.service';
import { CartService } from '../../cart/cart.service';
import { Product, ProductInCart } from '../../menu/modules/modul';
import { map, Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit, OnDestroy {
  quantity: number=0;
  sub$ = new Subject();
  arrayOfProductQuantity:number[]=[];
  isUserLoggedIn:boolean=false

  @ViewChild('addAnimation', { static: true }) addAnimation!: ElementRef;
  @ViewChild('quantityBox', { static: true }) quantityBox!: ElementRef
  constructor(private animateService: AnimateService, private cartService: CartService, private authService:AuthService) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn.subscribe(state=>{
      this.isUserLoggedIn=state
    })


    this.cartService.products$
      .pipe(takeUntil(this.sub$),
      map((products: Product[]) =>
        products.map((product) => ({
          ...product,
          quantity: 1 // Har bir mahsulotga quantity ni berasiz
        }))
      )
    )     
      .subscribe((product: ProductInCart[]) => {
        this.arrayOfProductQuantity=[];
        product.forEach((product)=>{
          this.arrayOfProductQuantity.push(product.quantity);
          this.quantity=this.arrayOfProductQuantity.reduce((acc, curr)=>{
            return (acc+=curr)
          })
        })
      })
  }


  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
