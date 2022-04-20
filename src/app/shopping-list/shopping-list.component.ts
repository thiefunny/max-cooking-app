import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit {
  constructor(public shoppingListService: ShoppingListService) {}
  ingredients = this.shoppingListService.getIngredients();

  ngOnInit() {
    //   console.log(this.ingredients)

    this.shoppingListService.ingredientAddedEvent.subscribe((_) => {
      this.ingredients = this.shoppingListService.getIngredients();
    });
  }
}
