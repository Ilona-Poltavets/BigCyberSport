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

  constructor(private dataGetter: DataGetterService, private route: ActivatedRoute, private fireData:FireDataGetterService) {
    this.teamId = this.route.snapshot.paramMap.get('id');
    //this.fireData.getTeam(this.teamId).subscribe(data => {
    //  this.teamName = data[0].name;
    //});
  }

  ngOnInit() {
    this.fireData.getPlayers(this.teamId).subscribe(data => {
      this.players = data;
    });
  }

  add() {
    this.showNew = true;
  }

  delete(player) {
    this.dataGetter.deletePlayer(player).subscribe(res => this.dataGetter.getPlayers(this.teamId).subscribe(data => this.players = data));
  }

  //addPlayer(player) {
  //  this.dataGetter.addPlayer(player, this.teamId).subscribe(res => this.dataGetter.getPlayers(this.teamId).subscribe(data => this.players = data));
  //  this.showNew = false;
  //}
}
