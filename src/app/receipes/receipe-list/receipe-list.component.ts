import {Component, OnInit} from '@angular/core';
import { Receipe } from '../receipe.model';
import {ReceipeService} from '../receipe.service';
import {ActivatedRoute, Router} from '@angular/router';

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

  // Initialising recipeService here and router for navigation on add new recipe click.
  constructor(private receipeService: ReceipeService,
              private router: Router,
              private route: ActivatedRoute) { }
  // Displaying all the recipes present in the service.
  ngOnInit() {
    this.receipes = this.receipeService.getReceipe();
  }

  /* On click navigate to the route. Using a relative route as i'm ready present at "/recipes/".
   To use a relative path to navigate method we need to use ActivatedRoute to find current path. */
  onAddNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
