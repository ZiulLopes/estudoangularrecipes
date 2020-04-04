import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { element } from 'protractor';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('tomate', 2),
    new Ingredient('ovos', 2),
    new Ingredient('cebola', 2),
    new Ingredient('trigo', 2),
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
