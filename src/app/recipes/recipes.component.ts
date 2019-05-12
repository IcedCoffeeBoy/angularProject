import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDetail: Recipe;
  constructor() {
    this.recipeDetail = new Recipe('recipe detail', 'recipe desc', 'https://via.placeholder.com/150');

  }

  ngOnInit() {
  }

  setRecipeDetail(recipe: Recipe) {
    this.recipeDetail = recipe;
  }

}
