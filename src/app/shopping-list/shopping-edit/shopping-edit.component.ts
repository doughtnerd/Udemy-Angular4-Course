import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addIngredientEvent = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdd() {
    const name = this.name.nativeElement.value;
    const amount = this.amount.nativeElement.value;

    this.addIngredientEvent.emit(new Ingredient(name, amount));
  }
}
