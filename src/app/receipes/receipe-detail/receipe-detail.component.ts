import { Component, OnInit, Input } from '@angular/core';
import {Receipe} from '../receipe.model';
import {ReceipeService} from '../receipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  // This variable listen to the selected receipe from receipe component.
  @Input() recipe: Receipe;
  constructor(private recipeService: ReceipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }

}
