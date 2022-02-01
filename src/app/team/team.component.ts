import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team:any;
  showInfo=false;

  players = [
    'Aleksandr \'s1mple\' Kostyliev',
    'Denis \'electroNic\' Sharipov',
    'Kirill \'Boombl4\' Mikhailov',
    'Ilya \'Perfecto\' Zalutskiy',
    'Valeriy \'b1t\' Vakhovskiy',
  ];
  captain: Object = {
    name: 'Kirill Mikhailov',
    nik: 'Boombl4',
    age: 23,
  };

  images = [
    'assets/1.jpg',
    'assets/2.jpg',
    'assets/3.jpg'
  ];
  curImageIndex = 0;
  curImage!: string;

  constructor() {
  }

  changeCurImage(forward: boolean) {
    if (forward) {
      this.curImageIndex++;
    } else {
      this.curImageIndex--;
    }
    if (this.curImageIndex >= this.images.length) {
      this.curImageIndex = 0;
    }
    if (this.curImageIndex < 0) {
      this.curImageIndex = this.images.length - 1;
    }
    this.curImage = this.images[this.curImageIndex];
  }

  ngOnInit() {
    this.curImage = this.images[this.curImageIndex];
    setInterval(() => {
      this.changeCurImage(true);
    }, 10000);

    //setTimeout(() => {
    // this.discipline = "";
    //  this.coach = "";
    //}, 2000);
  }
}
