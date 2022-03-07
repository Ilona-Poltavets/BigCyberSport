import {Component, OnInit} from '@angular/core';
import {DataGetterService, Team} from "../service/data-getter.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  teamId: number;
  players: any[];
  team: Team;

  showNew = false;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.teamId = +this.route.snapshot.paramMap.get('teamID');
    this.dataGetter.getPlayer(this.teamId).subscribe(data => {
      this.players = data;
    });
    this.team = this.dataGetter.getTeam(this.teamId);
  }

  add() {
    this.showNew = true;
  }

  delete(index: number) {
    this.dataGetter.deletePlayer(index);
  }

  addPlayer(player) {
    this.dataGetter.addPlayer(player);
    this.showNew = false;
  }
}
