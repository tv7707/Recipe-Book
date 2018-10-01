import {Component, OnInit} from '@angular/core';
import { Receipe } from '../receipe.model';
import {ReceipeService} from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  /* Array to hold receipe list of type Receipe.
  ** It will make sure that our variable should store objects.
  ** We will instantiate the class here.
  */
  receipes: Receipe[];

  // Initialising recipeService here.
  constructor(private receipeService: ReceipeService) { }
  // Displaying all the recipes present in the service.
  ngOnInit() {
    this.receipes = this.receipeService.getReceipe();
  }
}
