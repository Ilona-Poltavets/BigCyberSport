import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BigCyberSport';
  lastChangeDate = new Date();

  onDataChange(event: any) {
    this.lastChangeDate = event;
  }

  teams = [
    {
      name: 'NaVi',
      discipline: 'CS:GO',
      coach: 'Andrey \'B1ad3\' Gorodenskiy',
      playerQuantity: 5
    },
    {
      name: 'Gambit',
      discipline: 'CS:GO',
      coach: 'Konstantin \'groove\' Pikiner',
      playerQuantity: 5
    }
  ]
}
