import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Receipe} from '../../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  /*1. The variable recipe of type Receipe we are taking the value through the decorator @Input.*/
  /*2. We are using EventEmitter to emit the event when recipe name is selected from the list. But here the
   * EventEmitter doesn't return any data.*/
  @Input() recipe: Receipe;
  @Output() receipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.receipeSelected.emit();
  }
}
