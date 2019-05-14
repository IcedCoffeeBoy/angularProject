import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input() set isOpen(condition: boolean) {
    if (condition) {
      this.render.addClass(this.eleRef.nativeElement, 'open');
    } else {
      this.render.removeClass(this.eleRef.nativeElement, 'open');
    }
  }

  constructor(private eleRef: ElementRef, private render: Renderer2) { }

}
