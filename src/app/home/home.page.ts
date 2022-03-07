import {Component} from '@angular/core';
import {DataGetterService, Team} from "../service/data-getter.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataExchangerService} from "../service/data-exchanger.service";

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

  extraData: string;

  constructor(private dataGetter: DataGetterService,
              private router: Router,
              private route: ActivatedRoute,
              private dataExchanger: DataExchangerService) {
    this.extraData = this.dataExchanger.getData();
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

  sendData() {
    this.dataExchanger.publishData(this.extraData);
    this.router.navigate(['/data-sender']);
  }
}
