import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [
    'assets/1.jpg',
    'assets/2.jpg',
    'assets/3.jpg'
  ];
  curImageIndex = 0;
  curImage!: string;

  constructor() { }

  ngOnInit(): void {
    this.curImage = this.images[this.curImageIndex];
    setInterval(() => {
      this.changeCurImage(true);
    }, 10000);
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

}
