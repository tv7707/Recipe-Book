// Service for shopping list. It contains the data.
import {Ingredient} from '../shared/ingredients.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  /* Using an event-emitter of type Ingredient[] so that whenever we modify the array ingredients,
   changes  get reflected into it.*/
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  // Subject to emit the selected item index for editing.
  startEditing = new Subject<number>();

  private  ingredients: Ingredient[] = [
    new Ingredient('Orange', 10),
    new Ingredient('Chili', 5)
  ];
 // This function make sure that our ingredients array doesn't change and we make changes to a copy of it.
  getIngredients() {
    return this.ingredients.slice();
  }

  /* Function returns ingredient present at the given index.
   * @paramaters index of selected ingredient. */
  getIngredient(index:number) {
    return this.ingredients[index];
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

  /* Function to update the selected ingredient in the shopping list.
    @param index of editing ingredient and new ingredient that's been added.
  */
  updateIngredient(index:number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  // Deleting the ingredient from the shopping list.
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
