import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen: boolean = false;

  constructor(private eleRef: ElementRef, private render: Renderer2) { }

  @HostListener('click') toggleDropDown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.render.addClass(this.eleRef.nativeElement, 'open');
    } else {
      this.render.removeClass(this.eleRef.nativeElement, 'open');
    }
  }
}
