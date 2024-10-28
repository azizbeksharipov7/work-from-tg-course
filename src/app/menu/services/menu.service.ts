import { Injectable } from '@angular/core';
import { Product } from '../modules/modul';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  products:Product[]=[
    {
      id:1,
      title: 'Cheese Burger',
      img_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdzgovs-GC6JpMAapTAfWEH24xDsl1ceL_w&s',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis quibusdam ab provident blanditiis odit accusantium voluptatum ad, eos ipsam!',
      price:1000,
      sale: 4,
      category:'fast_food',
    },

    {
      id:2,
      title: 'Mega Set Burger',
      img_url:'https://avatars.mds.yandex.net/get-eda/3502490/61eb7db1edaa4343b926f28d3abb52de/M_height',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis quibusdam ab provident blanditiis odit accusantium voluptatum ad, eos ipsam!',
      price:2000,
      sale: 7,
      category:'burger_set',
     
    },

    {
      id:3,
      title: 'Beverage',
      img_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVS3LR8fMiBTfY2mCb5xmSAWnWE96jmP1XQ&s',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis quibusdam ab provident blanditiis odit accusantium voluptatum ad, eos ipsam!',
      price:2000,
      sale: 7,
      category:'beverage',
      
    }
  ]

  products$= new BehaviorSubject<Product[]>(this.products)



  constructor() { }
}
