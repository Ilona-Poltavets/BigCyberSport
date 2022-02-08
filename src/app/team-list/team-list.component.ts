import {Component, OnInit} from '@angular/core';
import {TeamsDataService} from "../services/teams-data.service";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams!: any[];

  constructor(private teamService: TeamsDataService) {
    teamService.getTeams().subscribe(
      (teams) => this.teams = teams
    );
  }

  ngOnInit(): void {
  }

}
