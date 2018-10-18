import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';
import {ShoppingListService} from '../shoppingList.service';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  // To update the form with the edit item value.
  @ViewChild('f') slForm : NgForm;
  itemSubscription: Subscription;
  // Check whether we are in create mode or editing mode.
  editingMode = false;
  // Store the value of index of edited item.
  editedItemIndex: number;
  // Item which got edited.
  editedItem: Ingredient;
  // Instantiating ShoppingList service here.
  constructor(private slService: ShoppingListService) { }

  // Listening to the subject to get the index of item that's get edited.
  ngOnInit() {
    this.itemSubscription = this.slService.startEditing.subscribe(
      (index:number) => {
         this.editedItemIndex = index;
         this.editingMode = true;
         this.editedItem = this.slService.getIngredient(index);
         this.slForm.setValue ({
           name: this.editedItem.name,
           amount: this.editedItem.amount
         })
      }
    )
  }

  // Adding items inside the shopping list.
  onAddItem(form: NgForm) {
    const value = form.value;
    // Instantiating the modal class here.
    const newIngredientAdded = new Ingredient(value.name, value.amount);
    // If we are in edit mode update the ingredient value else add new Ingredient to the list.
    if (this.editingMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredientAdded);
    } else {
      this.slService.addIngredient(newIngredientAdded);
    }
    // Reset the editing mode to false again so that we can close the edit loop.
    this.editingMode = false;
    // Reset the form after submitting the value.
    form.reset();
  }

  // Clear the form
  onClear() {
    this.slForm.reset();
    this.editingMode = false;
  }

  // Deleting the ingredient from the list in editMode.
  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  //Preventing memory leak of the subject.
  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }
}
