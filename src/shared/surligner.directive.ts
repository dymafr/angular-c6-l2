import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[monSurlignage]"
})
export class SurlignerDirective {
  constructor(el: ElementRef<HTMLParagraphElement>) {
    el.nativeElement.style.backgroundColor = "red";
  }
}
