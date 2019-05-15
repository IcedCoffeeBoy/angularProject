import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Recipe } from './../recipe.model';
import { RecipesService } from './../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  @Input() recipe: Recipe;


  constructor(private recipeService: RecipesService) {
  }

  ngOnInit() {
    console.log(this.recipe);
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  addIngredients() {
    this.recipeService.addIngredientToShopping(this.recipe.ingredients);
  }

}
