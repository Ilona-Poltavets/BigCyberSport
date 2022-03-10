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
  teamName: string;

  showNew = false;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService, private route: ActivatedRoute) {
    this.teamId = +this.route.snapshot.paramMap.get('id');
    this.dataGetter.getTeam(this.teamId).subscribe(data => {
      this.teamName = data[0].name;
    });
  }

  ngOnInit() {
    this.dataGetter.getPlayers(this.teamId).subscribe(data => {
      this.players = data;
    });
  }

  add() {
    this.showNew = true;
  }

  delete(player) {
    this.dataGetter.deletePlayer(player).subscribe(res => this.dataGetter.getPlayers(this.teamId).subscribe(data => this.players = data));
  }

  addPlayer(player) {
    this.dataGetter.addPlayer(player, this.teamId).subscribe(res => this.dataGetter.getPlayers(this.teamId).subscribe(data => this.players = data));
    this.showNew = false;
  }
}
