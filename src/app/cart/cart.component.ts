import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, ProductInCart } from '../menu/modules/modul';
import { CartService } from './cart.service';
import { map, Subject, takeUntil, tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnDestroy {
  orders!:ProductInCart[];
  totalPrice=0;
  constructor(private cartServ:CartService, private route:ActivatedRoute){}
  sub$= new Subject();  
  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      console.log(data);
      
    })



    this.cartServ.products$
    .pipe(
      takeUntil(this.sub$),
      map((products: Product[]) => 
        products.map(product => ({ 
          ...product, 
          quantity: 1 // Bu yerda quantity ga kerakli qiymatni belgilang
        }))
      ),
      tap((products:ProductInCart[])=>{
        products.forEach((product:ProductInCart)=>{
          const productTotalPrice=product.quantity*(product.price-(product.price/100)*product.sale)
          this.totalPrice+=productTotalPrice
          this.calculateTotalPrice(products);   // added new      
        })
      })
    )
    .subscribe((val)=>{
      this.orders=val;
    })
  }

    // Function to increase quantity added new
    increaseQuantity(index: number): void { 
      this.orders[index].quantity++;
      this.calculateTotalPrice(this.orders);
    }
  
    // Function to decrease quantity added new
    decreaseQuantity(index: number): void {
      if (this.orders[index].quantity > 1) {
        this.orders[index].quantity--;
        this.calculateTotalPrice(this.orders);
      }
    }
  
    // Function to remove product added new
    removeProduct(index: number): void {
      this.orders.splice(index, 1);
      this.calculateTotalPrice(this.orders);
    }
// Function to calculate total price added new
    calculateTotalPrice(products: ProductInCart[]): void {
      this.totalPrice = 0;
      products.forEach((product: ProductInCart) => {
        const productTotalPrice = product.quantity * (product.price - (product.price / 100) * product.sale);
        this.totalPrice += productTotalPrice;
      });
    }
  
  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }
}
