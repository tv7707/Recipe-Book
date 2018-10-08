import { Component, OnInit } from '@angular/core';
import {Receipe} from '../receipe.model';
import {ReceipeService} from '../receipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  recipe: Receipe;
  id: number;
  // Injecting services and Activated Route to get the recipe id from the current route.
  constructor(private recipeService: ReceipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  // Using observable params to get the id reactively. Id will help to identify the recipe.
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; // typecast with +
        this.recipe = this.recipeService.getReceipeId(this.id); //Fetching single recipe by id.
      }
    )
  }

  // Adding ingredient to shopping list.
  onAddToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }

  // Adding navigation to edit button.
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
