import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() subbmited = new EventEmitter<{name:string, amount:number}>();

  onSubmitClick(name: string, amount:number) {
    console.log(name, amount)
    this.subbmited.emit({name, amount});
  }

  constructor() { }

  ngOnInit() {
  }

}