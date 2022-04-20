import {
    Component,
    ElementRef, OnInit, ViewChild
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
//   @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor(public shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem() {
    const ingredient: Ingredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.shoppingListService.addIngredient(ingredient);
    this.shoppingListService.ingredientAddedEvent.emit(this.shoppingListService.getIngredients())
    // console.log(ingredient)
    // console.log(this.shoppingListService.getIngredients())
  }
}
