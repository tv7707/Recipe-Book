/* This file will store the structure of ingredients which is common to both shopping list and recipe.
 * We will use short hand method to declare properties as the argument of constructor.
 */

export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
