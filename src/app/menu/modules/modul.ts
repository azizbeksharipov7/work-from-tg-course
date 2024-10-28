export interface Product {
    id?:number;
    title: string;
    img_url:string;
    desc:string;
    price:number;
    sale:number;
    category:'fast_food' | 'burger_set'| 'beverage';
    // cartActions: ProductInCart
}
export interface ProductInCart extends Product{
    quantity:number;
}


