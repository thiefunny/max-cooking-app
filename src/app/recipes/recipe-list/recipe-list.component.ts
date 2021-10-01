import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Title1', 'Description1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Title2', 'Description2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Title3', 'Description3', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Title4', 'Description4', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Title5', 'Description5', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

@Output() recipeItemClicked = new EventEmitter<Recipe>()

onClick(recipeObject: Recipe) {
  console.log(recipeObject)
  // this.recipeItemClicked.emit(this.recipes.indexOf(value))
  this.recipeItemClicked.emit(recipeObject)
}

  constructor() { }

  ngOnInit() {
  }

}
