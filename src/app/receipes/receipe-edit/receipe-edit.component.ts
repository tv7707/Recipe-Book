import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ReceipesComponent} from '../receipes.component';
import {ReceipeService} from '../receipe.service';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.css']
})
export class ReceipeEditComponent implements OnInit {
  id: number;
  editMode =false;
  // Creating recipe form property using reactive approach.
  recipeForm: FormGroup;

  constructor( private route: ActivatedRoute,
  private recipeService: ReceipeService) { }

  // Get ingredients from recipeForm and push new controls to it.
  addIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name'   : new FormControl(null, Validators.required),
        'amount' : new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
    })
    )
  }

  ngOnInit() {
    this.route.params.subscribe (
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null; // Checking whether present in edit mode or not.
      }
    )
    // If we are present in the edit route then call the function.
    this.initForm();
  }
  // Initializing a private form.
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]); // FormArray() as we can have more than one ingredient.
    // If we are in edit mode then pre-populate the form.
    if (this.editMode) {
      const recipe = this.recipeService.getReceipeId(this.id); //console.log(recipe);
      recipeName   = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      // Check if recipe has ingredients or not.
      if(recipe['ingredients']) {
        // loop through all the ingredients.
        for (let ingredient of recipe.ingredients) {
          /* Pushing a form group since we have two control on single ingredient - name and amount.
           * FormControl is used here to get the name and amount.
           */
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    }

    //console.log(recipeIngredients);

    this.recipeForm = new FormGroup({
    'name':         new FormControl(recipeName, Validators.required),
    'imagePath':    new FormControl(recipeImagePath,Validators.required ),
    'description' : new FormControl(recipeDescription, Validators.required),
    'ingredients' : recipeIngredients
    })
  }

  // Getting the controls of ingredients.
  getControl() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

}
