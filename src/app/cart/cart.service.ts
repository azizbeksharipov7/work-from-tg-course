import { Injectable } from "@angular/core";
import { Product, ProductInCart } from "../menu/modules/modul";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    addedProducts: ProductInCart[] = [];
    products$ = new BehaviorSubject<Product[]>(this.addedProducts)

    constructor() { }

    addProduct(product: ProductInCart) {
        let productIndex: number | null;
        const foundProduct = this.addedProducts.find(
            (prod, index) => {
              const condition = prod.id===product.id

              productIndex=condition ? index : null;
              return condition
            })

            if(foundProduct){
                this.addedProducts[productIndex!].quantity +=1
            }else{
                product.quantity=1
                this.addedProducts.push(product);       
            }
        
        this.products$.next(this.addedProducts)
    }
}