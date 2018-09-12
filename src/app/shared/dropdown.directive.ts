import { Directive, HostBinding, HostListener } from '@angular/core';

// It is an attribute directive therefore inside the brackets.Also it will bind only toggle property.
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
// If dropdpwn is closed open it and vise-versa.
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
