import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";
import {asElementData} from "@angular/core/src/view";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') onClick(eventData: Event) {
    // console.log(asElementData);
    this.isOpen = !this.isOpen;
    // if (this.isOpen) {
    //   this.renderer.removeClass(this.elRef, 'open');
    // } else {
    //   this.renderer.addClass(this.elRef, 'open');
    // }
  }
}
