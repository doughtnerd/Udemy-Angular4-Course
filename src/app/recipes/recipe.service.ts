import {Recipe} from "./recipe.model";
import {Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";
import {Response, Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private _recipes: Recipe[] = [
    new Recipe('Dummy',
      'A dummy recipe for testing',
      'http://www.seriouseats.com/images/2017/02/20170228-pressure-cooker-recipes-roundup-collage.jpg',
      [new Ingredient('Stuff 1', 1), new Ingredient('Stuff 2', 2)]
    ),
    new Recipe('Dummy', 'A dummy recipe for testing',
      'http://www.seriouseats.com/images/2017/02/20170228-pressure-cooker-recipes-roundup-collage.jpg',
      [new Ingredient('Stuff 1', 1), new Ingredient('Stuff 2', 2)]
    )
  ];

  constructor(private slService: ShoppingListService, private http: Http, private authService: AuthService) {}

  get recipes() {
    return this._recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this._recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this._recipes.push(recipe);
    this.recipesChanged.next(this._recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this._recipes[index] = newRecipe;
    this.recipesChanged.next(this._recipes);
  }

  deleteRecipe(index: number) {
    this._recipes.splice(index, 1);
    this.recipesChanged.next(this._recipes);
  }

  saveRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://udemy-course-project-84038.firebaseio.com/recipes.json?auth=' + token, this.recipes);
  }

  fetchRecipes() {
    // return this.http.get('https://udemy-course-project-84038.firebaseio.com/recipes.json').map((data: Response) => {
    //   return data.json();
    // });
    const token = this.authService.getToken();
    const sub = this.http.get('https://udemy-course-project-84038.firebaseio.com/recipes.json?auth=' + token).map((response: Response) => {
      const recipes = response.json();
      for (const recipe of recipes) {
        if (!recipe['ingredients']) {
          recipe.ingredients = [];
        }
      }
      return recipes;
    });
    sub.subscribe((response: Recipe[]) => {
      console.log(response);
      this._recipes = response;
      this.recipesChanged.next(this._recipes);
    });
  }
}
