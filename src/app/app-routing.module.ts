import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';

/*
 Creating routes.
 children property to register child routes. It is an array of JS objects.
*/
const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full' },
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
