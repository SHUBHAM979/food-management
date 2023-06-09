import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[]= [];

  constructor(private shoppingListService : ShoppingListService) {
    this.ingredients =this.shoppingListService.getIngredient(); 
   }

  ngOnInit(): void {
    this.ingredients =this.shoppingListService.getIngredient(); 
    console.log(this.ingredients);
    this.shoppingListService.ingredientsChange.subscribe(
      (ingredients : Ingredient[]) =>{
          this.ingredients = ingredients;
      }
    );
  }

}
