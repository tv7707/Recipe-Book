// Registering Routes for RecipeModule. Every feature module should have its own route file.
import {RouterModule, Routes} from '@angular/router';
import {ReceipesComponent} from './receipes.component';
import {ReceipeStartComponent} from './receipe-start/receipe-start.component';
import {ReceipeEditComponent} from './receipe-edit/receipe-edit.component';
import {ReceipeDetailComponent} from './receipe-detail/receipe-detail.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {NgModule} from '@angular/core';

const recipeRoutes:Routes = [
    {path: '', component: ReceipesComponent, children: [
    {path: '', component: ReceipeStartComponent },// Helper Text.
    {path:'new', component:ReceipeEditComponent ,canActivate: [AuthGuardService]}, // New Recipe
    {path: ':id', component:  ReceipeDetailComponent }, // Recipe Detail Component route will be recipes/1
    {path:':id/edit', component:ReceipeEditComponent, canActivate: [AuthGuardService]},
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes) // forChild is used because we are in feature module not in a root module.
  ],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
