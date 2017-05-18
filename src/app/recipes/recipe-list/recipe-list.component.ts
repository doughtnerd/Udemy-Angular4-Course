import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeClickedEvent: EventEmitter<Recipe> = new EventEmitter();

  recipes: Recipe[] = [
    new Recipe('Dummy', 'A dummy recipe for testing',
      'http://www.seriouseats.com/images/2017/02/20170228-pressure-cooker-recipes-roundup-collage.jpg'),
    new Recipe('Dummy', 'A dummy recipe for testing',
      'http://www.seriouseats.com/images/2017/02/20170228-pressure-cooker-recipes-roundup-collage.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(eventData: Recipe) {
    this.recipeClickedEvent.emit(eventData);
  }

}
