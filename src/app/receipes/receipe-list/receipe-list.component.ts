import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  /* Array to hold receipe list of type Receipe.
  ** It will make sure that our variable should store objects.
  ** We will instantiate the class here.
  */
  receipes: Receipe[] = [
    new Receipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Receipe('An Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
 /* receipeWasSelected will emit another Event which parent component receipe will listen to.
  * We are passing Receipe array as the argument here.
 */
  @Output() receipeWasSelected = new EventEmitter<Receipe>();
  constructor() { }

  ngOnInit() {
  }
 // Will emit the selected recipe of type Receipe.
  onRecipeSelected(recipe: Receipe) {
   this.receipeWasSelected.emit(recipe);
  }

}
