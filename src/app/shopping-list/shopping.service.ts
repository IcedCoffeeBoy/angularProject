import { EventEmitter, OnInit } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';



export class ShoppingService implements OnInit {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  ingredientUpdate = new EventEmitter<Ingredient[]>();

  constructor() { }

  ngOnInit() {
    this.mapIngredient();
    this.sortIngredient();
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.mapIngredient();
    this.sortIngredient();
    this.ingredientUpdate.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.mapIngredient();
    this.sortIngredient();
    this.ingredientUpdate.emit(this.ingredients.slice());
  }

  private sortIngredient(): void {
    this.ingredients.sort(
      (a: Ingredient, b: Ingredient) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
  }

  private mapIngredient() {
    const map = new Map<string, number>();
    this.ingredients.forEach(
      (ingredient: Ingredient) => {
        if (map.has(ingredient.name.toLowerCase())) {
          const value = map.get(ingredient.name.toLowerCase());
          map.set(ingredient.name.toLowerCase(), value + ingredient.amount);
        } else {
          map.set(ingredient.name.toLowerCase(), ingredient.amount);
        }
      });
    const newIngredients: Ingredient[] = [];
    map.forEach((value, key) => {
      newIngredients.push(new Ingredient(key, value));
    });
    this.ingredients = newIngredients;
  }

}
