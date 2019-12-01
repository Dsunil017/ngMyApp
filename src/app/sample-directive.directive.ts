import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appSampleDirective]"
})
export class SampleDirectiveDirective {
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.color = "red";
  }
}
