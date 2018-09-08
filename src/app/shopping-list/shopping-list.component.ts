import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
/* Creating an array ingredients to display data in shopping list.
 * ingredients is type of Ingredient and we will instantiate the class here.
 */
export class ShoppingListComponent implements OnInit {
 ingredients: Ingredient[] = [
   new Ingredient('Orange', 10),
   new Ingredient('Chili', 5)
 ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
