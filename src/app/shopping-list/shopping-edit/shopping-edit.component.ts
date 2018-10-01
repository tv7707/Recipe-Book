import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';
import {ShoppingListService} from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
// @ViewChild decorator is used for cross-component communication.
export class ShoppingEditComponent implements OnInit {
   @ViewChild('nameInput') nameInputRef: ElementRef;
   @ViewChild('amountInput') amountInputRef: ElementRef;
  // Instantiating ShoppingList service here.
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    // Instantiating the modal class here.
    const newIngredientAdded = new Ingredient(ingredientName, ingredientAmount);
    // Adding new-ingredient to the service function.
    this.slService.addIngredient(newIngredientAdded);
  }
}
