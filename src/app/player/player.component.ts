import {Component, Input, OnInit} from '@angular/core';
import {TeamsDataService} from "../services/teams-data.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input()player:any;
  @Input()nik!:string;

  showInfo=false;

  constructor(private dataService:TeamsDataService) { }

  ngOnInit(): void {
  }

  delPlayer(){
    console.log(this.nik);
    this.dataService.deletePlayer(this.nik);
  }
}
