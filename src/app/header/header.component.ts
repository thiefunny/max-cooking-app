import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() menuClicked = new EventEmitter < string > ();

  sendOpenedMenu(menuLink: string) {
    this.menuClicked.emit(menuLink);
  }

}