import {Component, OnInit} from '@angular/core';
import {DataGetterService, Team} from "../service/data-getter.service";
import {ActivatedRoute} from "@angular/router";
import {FireDataGetterService} from "../service/fire-data-getter.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  teamId: string;
  teamName: string;
  players: any[];

  showNew = false;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService, private route: ActivatedRoute, private fireData: FireDataGetterService) {
    this.teamId = this.route.snapshot.paramMap.get('id');
    this.teamName=this.route.snapshot.paramMap.get('name');
    this.fireData.getPlayers(this.teamId).subscribe(data => {
      this.players = data;
    });
  }

  ngOnInit() {
  }

  add() {
    this.showNew = true;
  }

  delete(player) {
    this.fireData.deletePlayer(player, this.teamId);
  }

  addPlayer(player) {
    this.fireData.addPlayer(player, this.teamId);
    this.showNew = false;
  }
}
