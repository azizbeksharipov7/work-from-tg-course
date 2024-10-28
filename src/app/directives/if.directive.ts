import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private vcRef:ViewContainerRef , private templateRef: TemplateRef<any>
) 
{


  vcRef.clear();
  console.log(vcRef);
  console.log(templateRef)
  
 }

}
