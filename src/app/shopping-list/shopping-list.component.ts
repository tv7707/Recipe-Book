import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';
import {ShoppingListService} from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
/* Creating an array ingredients to display data in shopping list.
 * ingredients is type of Ingredient and we will instantiate the class here.
 */
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  // Initalizing shoppingList service here.
  constructor(private slService: ShoppingListService) { }

  // Displaying the shopping list. Also listen to newly added ingredients.
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.
    subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients =  ingredients;
      }
    );
  }
}
