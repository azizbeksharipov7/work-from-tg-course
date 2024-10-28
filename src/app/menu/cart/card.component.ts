import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product, ProductInCart } from '../modules/modul';
import { AnimateService } from '../../shared/services/animate.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
@Input('product') product!: Product;

@ViewChild('add', {static: true}) add!: ElementRef<HTMLDivElement>

constructor(private animateService: AnimateService, private cartService:CartService){}

increasingNumberOfQuantity(){
  this.animateService.increaseQuantity();
}

ngOnInit(): void {
  // this.animateService.addCart$.subscribe((quantity: number)=>{
  //   if(quantity>0) this.animateService.addToCart(this.add.nativeElement)
  //   })
}

addToCart(){
  this.cartService.addProduct(this.product as ProductInCart)
}

}
