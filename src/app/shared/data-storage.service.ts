import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ReceipeService} from '../receipes/receipe.service';
import {Receipe} from '../receipes/receipe.model';
import 'rxjs/add/operator/map';
import {AuthService} from '../auth/auth.service';
//Using injectable so that we can use HTTP service inside this service.
@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: ReceipeService,
              private authService: AuthService) {}

  // Http request are wrapped inside an observable.
  storeRecipes() {
    return this.http.put('https://angular-recipe-book-51647.firebaseio.com/recipes.json',
      this.recipeService.getReceipe());
  }

  // Receiving recipe from the database and replacing the exisiting recipe with thr new one.
  getRecipes() {
   const token = this.authService.getToken();
    this.http.get('https://angular-recipe-book-51647.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes : Receipe[] = response.json();
          for (let recipe of recipes) {
            if(!recipe['ingredient']) {
              recipe['ingredient'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
      (recipes: Receipe[]) => {
         this.recipeService.setRecipe(recipes);
      }
    );
  }


}
