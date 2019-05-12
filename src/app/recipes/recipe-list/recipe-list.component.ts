import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeClicked = new EventEmitter<Recipe>();
  @ViewChild('recipeName') recipeName: ElementRef;
  @ViewChild('description') description: ElementRef;
  selectedIndex: number;

  recipes: Recipe[] = [
    new Recipe('Test name',
      'Test description',
      'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'),
    new Recipe('Test name 2',
      'Test description 2',
      'https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fspecials-images.forbesimg.'
      + 'com%2Fdam%2Fimageserve%2F1072007868%2F960x0.jpg%3Ffit%3Dscale ')
  ];

  constructor() { }

  ngOnInit() {
  }



  onCreateRecipe() {
    const newRecipe = new Recipe(
      this.recipeName.nativeElement.value,
      this.description.nativeElement.value,
      'https://via.placeholder.com/150');
    this.recipes.push(newRecipe);
  }

  onRecipeClick(index: number) {
    this.selectedIndex = index;
    return this.recipeClicked.emit(this.recipes[index]);
  }

}
