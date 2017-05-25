import {Recipe} from "./recipe.model";
import {EventEmitter} from '@angular/core';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe('Dummy', 'A dummy recipe for testing',
      'http://www.seriouseats.com/images/2017/02/20170228-pressure-cooker-recipes-roundup-collage.jpg'),
    new Recipe('Dummy', 'A dummy recipe for testing',
      'http://www.seriouseats.com/images/2017/02/20170228-pressure-cooker-recipes-roundup-collage.jpg')
  ];

  get recipes() {
    return this._recipes.slice();
  }
}
