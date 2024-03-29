import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipeDetail: Recipe;
  constructor(private recipeList: RecipesService) {
  }

  ngOnInit() {
    this.recipeList.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeDetail = recipe;
      });
  }

}
