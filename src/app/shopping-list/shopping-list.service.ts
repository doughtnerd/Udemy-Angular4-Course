import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from "rxjs/Subject";

export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingredientsChanged = new Subject<Ingredient[]>();

  startedEdited = new Subject<number>();

  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  get ingredients(){
    return this._ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.next(this._ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.next(this._ingredients.slice());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this._ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients);
  }

  deleteIngredient(index: number) {
    this._ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients);
  }

}
