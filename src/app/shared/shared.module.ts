// Shared Module for common components, directives or pipes used in the app.
import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports:[
    CommonModule, // We don't need to import modules when we are declaring components or directives.
    DropdownDirective
  ]
})
export class SharedModule{}
