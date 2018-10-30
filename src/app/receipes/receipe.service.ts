// Creating a service for recipes. This service will manage recipe data and cross-component communication.
import {Receipe} from './receipe.model';
import { Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Ingredient} from '../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list/shoppingList.service';

@Injectable()
export class ReceipeService {
  recipeListChanged = new Subject<Receipe[]>();

  /* An array to hold recipe list of type Receipe.
    ** It will make sure that our variable should store objects.
    ** We will instantiate the class here.
    */
 private receipes: Receipe[] = [
    new Receipe('Pan Cake',
      'Delicious chocolate chip pan cake',
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Platt_brunch.jpg',
      [new Ingredient('Chocolate Chips', 10),
       new Ingredient('Strawberry', 5)
       ]),
    new Receipe('Caesar Rome Salad',
      'The Almost Traditional Recipe with Croutons, Parmesan Cheese and Special Caesar Dressing.',
      'https://upload.wikimedia.org/wikipedia/commons/2/23/Caesar_salad_%282%29.jpg',
      [new Ingredient('Croutons', 15),
       new Ingredient('Cheese', 10)])
  ];

 // Injecting shoppingList service into this service.
  constructor(private slService: ShoppingListService) {}
  // Return all the recipes present in the list.
 getReceipe() {
   return this.receipes.slice();
 }

 // Return the index of recipe in the array.
  getReceipeId(index: number) {
    return this.receipes[index];
  }

 // Adding ingredients of recipes inside the shoppinglist.
 addToShoppingList(ingredients: Ingredient[]) {
   this.slService.addIngredients(ingredients);
 }

  // Add new recipe to the list.
  addNewRecipe(recipe: Receipe) {
    this.receipes.push(recipe);
    this.recipeListChanged.next(this.receipes.slice());
  }

  // Update existing recipe.
  updateRecipe(index: number, recipe: Receipe) {
    this.receipes[index] = recipe;
    this.recipeListChanged.next(this.receipes.slice());
  }

  //Deleting a recipe.
  deleteRecipe(index: number) {
    this.receipes.splice(index, 1);
    this.recipeListChanged.next(this.receipes.slice());
  }

  //Set new recipes pulled from the database.
  setRecipe(recipes: Receipe[]) {
    this.receipes = recipes;
    this.recipeListChanged.next(this.receipes.slice());
  }

}
