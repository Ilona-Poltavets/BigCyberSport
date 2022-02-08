import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TeamsDataService} from "../services/teams-data.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team: any;
  @Input()tmIndex!:number;

  showInfo = false;

  constructor(private teamDataService:TeamsDataService) {}

  ngOnInit() {
  }

  delTeam(){
    this.teamDataService.deleteTeam(this.tmIndex);
  }
}
