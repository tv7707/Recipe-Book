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
// @ViewChild decorator is used for cross-component communication.
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm : NgForm;
  itemSubscription: Subscription;
  // Check whether we are in create mode or editing mode
  editingMode = false;
  // Store the value of index of edited item.
  editedItemIndex: number;
  // Item which got edited.
  editedItem: Ingredient;

  // Instantiating ShoppingList service here.
  constructor(private slService: ShoppingListService) { }

  // Listening to the service to get the index of item that's get edited.
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

  onAddItem(form: NgForm) {
    const value = form.value;
    // Instantiating the modal class here.
    const newIngredientAdded = new Ingredient(value.name, value.amount);
    // Adding new-ingredient to the service function.
    this.slService.addIngredient(newIngredientAdded);
  }
  //Preventing memory leak of the subject.
  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }
}
