import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team: any;
  @Input()tmIndex!:number;
  @Output()removeTeam=new EventEmitter();

  showInfo = false;

  constructor() {
  }

  ngOnInit() {
  }

  delTeam(){
    this.removeTeam.emit(this.tmIndex);
  }
  /*players = [
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
  curImage!: string;*/
}
