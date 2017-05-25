import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeData: Recipe;

  constructor(private rService: RecipeService) { }

  ngOnInit() {
  }

  sendToShopping() {
    this.rService.addToShoppingList(this.recipeData.ingredients);
  }

}
