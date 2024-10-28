import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { gsap } from 'gsap';
@Injectable({
  providedIn: 'root'
})
export class AnimateService {
  addCart$= new BehaviorSubject <number>(0);
  quantity=0;
  getQuantitr$= new BehaviorSubject <number>(this.quantity);
  increaseQuantity(){
    ++this.quantity;
    this.getQuantitr$.next(this.quantity)
  }
  constructor() { }

  addToCart <T extends HTMLElement> (element: T){
    element.style.opacity='1';
    gsap.to(element, {
      display:'block',
      x:460,
      y: -320,
      ease: 'power3.out',
      duration: 1.5,
      position:'absolute',
      zIndex: 1000,
      opacity:0,
      scale:2,
    });
    gsap.from(element,{
      display:'none',
      x:0,
      y:0,
      duration:0.2,
      delay:1.5,
      opacity:1,
      scale:2,
      onComplete:()=>{
        this.increaseQuantity();
      }
    })
  }
  
}
