import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from './../../shared/Ingredient.model';
import { ShoppingService } from './../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styles: []
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onSubmit() {
    const newIngredient = new Ingredient(
      this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
    this.shoppingService.addIngredient(newIngredient);
  }

}

