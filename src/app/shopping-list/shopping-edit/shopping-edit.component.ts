import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {Form, NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  onIngredientAdd() {
    const name = this.name.nativeElement.value;
    const amount = this.amount.nativeElement.value;

    this.shoppingService.addIngredient(new Ingredient(name, amount));
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const ing = new Ingredient(value.name, value.amount);
    this.shoppingService.addIngredient(ing);
  }
}
