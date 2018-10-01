// Service for shopping list. It contains the data.
import {Ingredient} from '../shared/ingredients.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  /* Using an event-emitter of type Ingredient[] so that whenever we modify the array ingredients,
   changes  get reflected into it.*/
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private  ingredients: Ingredient[] = [
    new Ingredient('Orange', 10),
    new Ingredient('Chili', 5)
  ];
 // This function make sure that our ingredients array doesn't change and we make changes to a copy of it.
  getIngredients() {
    return this.ingredients.slice();
  }
  // Function is called when ingredient is pushed inside the array.
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  // Function is called when ingredients are added from recipe-list.
  addIngredients(ingredients: Ingredient[]) {
    // Spread operator is used here.
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
