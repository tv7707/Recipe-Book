import { Component, OnInit } from '@angular/core';
import {Receipe} from './receipe.model';
import {ReceipeService} from './receipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [ReceipeService]
})
export class ReceipesComponent implements OnInit {
  selectedReceipe: Receipe;

  // Service "ReceipeService" is initialized here.
  constructor(private receipeService: ReceipeService) { }

  // Creating an event listener here which will be informed about recipe selection changes.
   ngOnInit() {
    this.receipeService.recipeSelected.subscribe(
      (recipe: Receipe) => {
        this.selectedReceipe = recipe;
      }
    );
  }
}
