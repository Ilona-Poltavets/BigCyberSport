import {Component} from '@angular/core';
import {DataGetterService, Team, User} from '../service/data-getter.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataExchangerService} from '../service/data-exchanger.service';

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
              private dataExchanger: DataExchangerService) {
    this.extraData = this.dataExchanger.getData();
    this.dataGetter.getTeams().subscribe((data) => {
      this.teams = data;
    });

    this.userName = this.dataGetter.getUser();
  }

  //hasAccess(permission: string) {
  // return this.permissions.indexOf(permission) !== -1;
  //}

  add() {
    this.showNew = true;
  }

  delete(team) {
    this.dataGetter.deleteTeam(team).subscribe(res => this.dataGetter.getTeams().subscribe(data => this.teams = data));
  }

  addTeam(team) {
    this.dataGetter.addTeam(team).subscribe(res => this.dataGetter.getTeams().subscribe(data => this.teams = data));
    this.showNew = false;
  }

  sendData() {
    this.dataExchanger.publishData(this.extraData);
    this.router.navigate(['/data-sender']);
  }
}
