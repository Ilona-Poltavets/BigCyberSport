import {Component, OnInit} from '@angular/core';
import {DataGetterService, Role, User} from "../service/data-getter.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: User[];
  roles: Role[];

  userName: string;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService) {
    this.dataGetter.getUsers().subscribe((data) => {
      this.users = data;
    });
    this.dataGetter.getRoles().subscribe((data) => {
      this.roles = data;
    });
    this.userName = this.dataGetter.getUser();
  }

  getRole(id: number) {
    for (let i of this.roles) {
      if (i.id === id) {
        return i.name;
      }
    }
  }

  delete(user) {
    this.dataGetter.deleteUser(user).subscribe(res => this.dataGetter.getTeams().subscribe(data => this.users = data));
  }

  ngOnInit() {
  }

}
