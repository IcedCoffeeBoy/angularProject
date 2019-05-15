import { Ingredient } from './../../shared/Ingredient.model';
import { ShoppingService } from './../../shopping-list/shopping.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  @Input() recipe: Recipe;


  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    console.log(this.recipe);
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  addIngredients() {
    this.recipe.ingredients.forEach(
      (ingredient: Ingredient) =>
        this.shoppingService.addIngredient(ingredient)
    );
  }

}
