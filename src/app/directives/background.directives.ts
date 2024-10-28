import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";
import { CartsService } from "../carts.service";

@Directive({
    selector: '[bgOnHover]',
})
export class BgDirective{
    @Input('bgOnHover') hoveredCart!:string;


   @HostListener('mouseleave') onHover(){
    this.cartService.hoveredCart$.next(this.hoveredCart);
    this.elementRef.nativeElement.style.boxShadow='0 2px 2px #0a10143f, 0  0 2px #0a10141f'
   }

   @HostListener('mouseover') onLeave(){
    this.elementRef.nativeElement.style.cursor='pointer';
    this.elementRef.nativeElement.style.boxShadow='0 7px 15px #0a10143d, 0 2px 7px #0a10141f'
   }

   constructor(
    private elementRef: ElementRef, 
    private renderer:Renderer2 , 
    private cartService:CartsService
){}
}