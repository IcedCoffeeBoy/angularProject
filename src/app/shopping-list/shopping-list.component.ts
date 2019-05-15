import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingService } from './shopping.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingList: ShoppingService) {
  }

  ngOnInit() {
    this.shoppingList.ingredientUpdate.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
    this.ingredients = this.shoppingList.getIngredients();

  }

}
