import {Component, Input, OnInit} from '@angular/core';
import {Receipe} from '../../receipe.model';
import {ReceipeService} from '../../receipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  /* The variable recipe of type Receipe we are listening to the data here..*/
  @Input() recipe: Receipe;

  // ReceipeService is initialized.
  constructor(private receipeService: ReceipeService) { }

  ngOnInit() {
  }
  // With the help of service, emitting the selected recipe data, receipe-detail component will listen to it.
  onSelected() {
    this.receipeService.recipeSelected.emit(this.recipe);
  }
}
