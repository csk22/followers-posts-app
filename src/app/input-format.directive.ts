import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input() appInputFormat;
  constructor(private el: ElementRef) { }
  // @HostListener('focus') onFocus() {
  //   console.log('on Focus');
  // }

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    if (this.appInputFormat === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }

    console.log('on Blur');
  }



}
