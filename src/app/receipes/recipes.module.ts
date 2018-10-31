// RecipeModule for all the recipes.

import {NgModule} from '@angular/core';
import {ReceipesComponent} from './receipes.component';
import {ReceipeEditComponent} from './receipe-edit/receipe-edit.component';
import {ReceipeItemComponent} from './receipe-list/receipe-item/receipe-item.component';
import {ReceipeDetailComponent} from './receipe-detail/receipe-detail.component';
import {ReceipeStartComponent} from './receipe-start/receipe-start.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ReceipeListComponent} from './receipe-list/receipe-list.component';
import {RecipeRoutingModule} from './recipes-route.module';
import {SharedModule} from '../shared/shared.module';


//NgModule converts typescript class into Angular modules.
@NgModule({
  declarations:[
    ReceipesComponent,
    ReceipeEditComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    ReceipeStartComponent,
    ReceipeListComponent
  ],
  imports: [
    CommonModule, // Provide access to directives like ngFor, ngIf
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {

}
