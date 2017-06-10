import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeService} from "../recipes/recipe.service";
import {Response} from '@angular/http';
import {AuthService} from "../auth/auth.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() pageSelectedEvent: EventEmitter<string> = new EventEmitter();

  constructor(private rService: RecipeService, private authService: AuthService) {

  }

  ngOnInit() {
  }

  onSave() {
    this.rService.saveRecipes().subscribe((response: Response) => {
      console.log(response);
    });
  }

  onFetch() {
    this.rService.fetchRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
