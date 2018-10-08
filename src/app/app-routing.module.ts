import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReceipesComponent} from './receipes/receipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ReceipeDetailComponent} from './receipes/receipe-detail/receipe-detail.component';
import {ReceipeStartComponent} from './receipes/receipe-start/receipe-start.component';
import {ReceipeEditComponent} from './receipes/receipe-edit/receipe-edit.component';

/*
 Creating routes.
 children property to register child routes. It is an array of JS objects.
*/
const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {path: 'recipes', component: ReceipesComponent, children: [
    {path: '', component: ReceipeStartComponent },// Helper Text.
    {path:'new', component:ReceipeEditComponent}, // New Recipe
    {path: ':id', component:  ReceipeDetailComponent }, // Recipe Detail Component route will be recipes/1
    {path:':id/edit', component:ReceipeEditComponent},
  ] },
  {path: 'shopping-list', component: ShoppingListComponent }
];
/* Registering the appRoutes in the application. To register the routes we need to import RouterModule.
 * Since route are external file we to export them.
 */

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class appRoutingModule {
}
