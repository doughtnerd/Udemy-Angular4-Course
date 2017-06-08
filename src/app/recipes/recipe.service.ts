import {Recipe} from "./recipe.model";
import {Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

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

  constructor(private slService: ShoppingListService) {}

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
}
