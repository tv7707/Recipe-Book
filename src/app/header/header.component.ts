import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
 templateUrl: './header.component.html',
})
/** We are binding events of header with app component. For this we are using Angular Object EventEmitter.
 ** The Output decorator is used to take the data from child component to parent component.
 */
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter();
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}

