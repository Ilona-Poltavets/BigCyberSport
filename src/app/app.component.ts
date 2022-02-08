import {Component} from '@angular/core';
import {TeamsDataService} from "./services/teams-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BigCyberSport';
  teams!: any[];

  options = {
    menuWidth: 300, // Default is 240
    edge: 'right' // Choose the horizontal origin
  };

  constructor() {
  }
}
