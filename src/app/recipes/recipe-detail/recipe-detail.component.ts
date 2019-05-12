import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  @Input() recipe: Recipe;


  constructor() {
  }

  ngOnInit() {
    console.log(this.recipe);
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
