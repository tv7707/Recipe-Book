import {Component, Input, OnInit} from '@angular/core';
import {Receipe} from '../../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  /* The variable recipe of type Receipe we are listening to the data here.
  *  Getting the id from recipe list. */
  @Input() recipe: Receipe;
  @Input() index: number;

  ngOnInit() {
  }
}
