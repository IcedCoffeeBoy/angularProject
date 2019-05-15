import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipesService } from './../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;


  constructor(private recipesList: RecipesService) { }

  ngOnInit() {
  }

  onSelect() {
    this.recipesList.recipeSelected.emit(this.recipe);
  }

}
