import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    templateUrl: "./recipe-list.component.html",
    selector: 'app-recipe-list',
    styleUrls: ["./recipe-list.component.css"]
})

export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.pacificfoods.com/wp-content/uploads/2019/03/Organic-Creamy-Tomato-Soup-8oz-2.jpg'),
        new Recipe('A Second Recipe', 'This is beter recipe', 'https://s1.qwant.com/thumbr/0x380/b/1/ec9c5f3aeae06e0645f5d738ab93010f7eefa61b0b715ed5cf5109d6611149/zupa-grochowa.jpg?u=http%3A%2F%2Fimg4.garnek.pl%2Fa.garnek.pl%2F018%2F661%2F18661317_800.0.jpg%2Fzupa-grochowa.jpg&q=0&b=1&p=0&a=0')
    ];

    constructor() {

    }
    
    ngOnInit() {

    }
}