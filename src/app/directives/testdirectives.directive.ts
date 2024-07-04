import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTestdirectives]'
})
export class TestdirectivesDirective {

  constructor(ele:ElementRef) { 
  ele.nativeElement.style.color='red';
  
  
  }

}
