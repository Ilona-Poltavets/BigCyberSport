import {Component} from '@angular/core';
import {DataGetterService, Team} from "../service/data-getter.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  teams: Team[];
  userName: string;

  showNew = false;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService) {
    this.dataGetter.getTeams().subscribe((data) => {
      this.teams = data;
    });
    this.userName = this.dataGetter.getUser();
  }

  add() {
    this.showNew = true;
  }

  delete(index: number) {
    this.dataGetter.deleteTeam(index);
  }

  addTeam(team) {
    this.dataGetter.addTeam(team);
    this.showNew = false;
  }
}
