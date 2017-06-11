
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {AuthGuard} from "../auth/auth-guard.service";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipesComponent} from "./recipes.component";

const recipeRoutes: Routes = [
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent, pathMatch: 'full'},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule {

}
