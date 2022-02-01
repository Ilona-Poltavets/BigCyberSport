import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  name = 'NaVi';
  discipline = 'CS:GO';
  coach = 'Andrey \'B1ad3\' Gorodenskiy';

  playerQuantity = 6;
  players = [
    'Aleksandr \'s1mple\' Kostyliev',
    'Denis \'electroNic\' Sharipov',
    'Kirill \'Boombl4\' Mikhailov',
    'Ilya \'Perfecto\' Zalutskiy',
    'Valeriy \'b1t\' Vakhovskiy',
  ];
  captain = {
    name: 'Kirill Mikhailov',
    nik: 'Boombl4',
    age: 23,
  };

  images = [
    'assets/1.jpg',
    'assets/2.jpg',
    'assets/3.jpg'
  ];
  curIndexIndex = 0;
  curImage;

  constructor() {
  }

  ngOnInit() {
    this.curImage = this.images[this.curIndexIndex];
    setTimeout(() => {
      this.curIndexIndex++;
      if (this.curIndexIndex >= this.images.length) {
        this.curIndexIndex = 0;
      }
      this.curImage = this.images[this.curIndexIndex];
    }, 2000);
  }
}
