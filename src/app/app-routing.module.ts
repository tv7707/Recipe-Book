import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReceipesComponent} from './receipes/receipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

// Creating routes.
const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {path: 'recipes', component: ReceipesComponent },
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
