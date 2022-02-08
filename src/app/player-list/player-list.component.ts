import {Component, OnInit} from '@angular/core';
import {TeamsDataService} from "../services/teams-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players!: any[];
  tmName!: string;
  name='';

  constructor(private teamService: TeamsDataService, private activatedRoute: ActivatedRoute) {
    teamService.getPlayers(this.tmName).subscribe((players)=>this.players=players);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.tmName = params['tmId'];
        this.getPlayers(this.tmName);
      }
    );
    this.name=this.tmName;
  }

  getPlayers(name: string) {
    const tmName = name;
    this.teamService.getPlayers(tmName).subscribe(
      (players) => {
        this.players = players;
      }
    );
  }
}
