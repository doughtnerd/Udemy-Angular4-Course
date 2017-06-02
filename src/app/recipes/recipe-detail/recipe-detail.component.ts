import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {RecipeService} from "../recipe.service";
import {
  ActivatedRoute, ActivatedRouteSnapshot, Data, Params, Route, Router, RouteReuseStrategy,
  RouterStateSnapshot
} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeData: Recipe;
  id: number;

  constructor(private rService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeData = this.rService.recipes[this.id];
    });
    // this.route.params
    // this.recipeData = this.rService.recipes[this.route.params['id']]
  }

  sendToShopping() {
    this.rService.addToShoppingList(this.recipeData.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
