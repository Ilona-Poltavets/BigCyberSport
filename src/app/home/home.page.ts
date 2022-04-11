import {Component} from '@angular/core';
import {DataGetterService, Team, User} from '../service/data-getter.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataExchangerService} from '../service/data-exchanger.service';
import {FireDataGetterService} from "../service/fire-data-getter.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  teams: Team[];
  userName: string;
  role: any;

  showNew = false;
  showEdit = -1;
  permissions: string[];

  extraData: string;

  constructor(private dataGetter: DataGetterService,
              private router: Router,
              private route: ActivatedRoute,
              private dataExchanger: DataExchangerService,
              private fireData: FireDataGetterService) {
    this.extraData = this.dataExchanger.getData();

    this.fireData.getTeams().subscribe(
      data => this.teams = data
    );

    this.userName = this.fireData.getUser();
  }

  add() {
    this.showNew = true;
  }

  delete(team) {
    this.fireData.deleteTeam(team);
  }

  addTeam(team) {
    this.fireData.addTeam(team);
    this.showNew = false;
  }

  sendData() {
    this.dataExchanger.publishData(this.extraData);
    this.router.navigate(['/data-sender']);
  }
}
