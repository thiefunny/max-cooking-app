import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuReceived:string;

  openMenu(receivedMenu: string) {
    return this.menuReceived = receivedMenu;
  }

}
