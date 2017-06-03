import {Recipe} from "./recipe.model";
import {Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

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
}
