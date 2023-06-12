import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customDirective]'
})
export class CustomDirective {

  constructor(private el: ElementRef) {
   el.nativeElement.style.color = "red";
   
  }

}
