import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {HomeComponent} from './home/home.component';

/*
 Creating routes.
 children property to register child routes. It is an array of JS objects.
 loadChildren is used for lazy loading.
*/
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './receipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent },
  {path : 'signup', component: SignupComponent},
  {path : 'signin', component: SigninComponent}
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
