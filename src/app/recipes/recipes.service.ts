import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingService } from './../shopping-list/shopping.service';
import { Recipe } from './recipe.model';


@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe('Test name',
      'Test description',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
      [
        new Ingredient('chicken', 1),
        new Ingredient('Fries', 20)
      ]),
    new Recipe('Test name 2',
      'Test description 2',
      'https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.'
      + 'com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale ',
      [
        new Ingredient('beef', 2),
        new Ingredient('bun', 1)
      ])
  ];

  public recipesUpdate = new EventEmitter<Recipe[]>();
  public recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingService) { }

  public getRecipes(): Recipe[] {
    // Return a copy of the recipes array
    return this.recipes.slice();
  }

  public addRecipe(name: string, description: string, imgPath: string): void {
    this.recipes.push(new Recipe(name, description, imgPath, []));
    this.recipesUpdate.emit(this.recipes.slice());
  }

  public addIngredientToShopping(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

}
