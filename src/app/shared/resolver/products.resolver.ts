import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product, ProductInCart } from '../../menu/modules/modul';
import { CartService } from '../../cart/cart.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class ProductsResolver implements Resolve<ProductInCart[]>  {
   constructor (private cartService: CartService){}
   resolve(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
   ):Observable<ProductInCart[]>{
  
    return this.cartService.products$.pipe(
     map((products: Product[]) =>
       products.map(product => ({
         ...product,
         quantity: 1 // Yangi `quantity` maydonini qo'shish
       }))
     )
   );
   }
};
