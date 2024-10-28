import { Component, ElementRef, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';
import { title } from 'process';

@Component({
  selector: 'app-carts-form',
  templateUrl: './carts-form.component.html',
  styleUrl: './carts-form.component.scss'
})
export class CartsFormComponent implements OnInit{
 constructor(private cartService:CartsService) {}

 ngOnInit(): void {}
   addCart(title :string, description:string){
      this.cartService.addCart({title,description})
   }
 
}
