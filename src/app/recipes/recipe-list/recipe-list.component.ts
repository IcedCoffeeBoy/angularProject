import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipesService } from './../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @ViewChild('recipeName') recipeName: ElementRef;
  @ViewChild('description') description: ElementRef;
  selectedIndex: number;

  private recipes: Recipe[];

  constructor(private recipeList: RecipesService) {
  }

  ngOnInit() {
    /*  To avoid getting an empty list if recipe-list component is constucted
    before RecipeService
    */
    this.recipeList.recipesUpdate.subscribe(
      (recipes: Recipe[]) => { this.recipes = recipes; }
    );
    this.recipes = this.recipeList.getRecipes();
  }

  onCreateRecipe() {
    this.recipeList.addRecipe(this.recipeName.nativeElement.value,
      this.description.nativeElement.value,
      'https://via.placeholder.com/150');
  }

}
