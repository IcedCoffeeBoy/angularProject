import { Ingredient } from './../../shared/Ingredient.model';
import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styles: []
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() shoppingCreated = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const newIngredient = new Ingredient(
      this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
    this.shoppingCreated.emit(newIngredient);
  }

}
