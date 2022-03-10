import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataGetterService, Role, Team, User} from "../../service/data-getter.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() cancelAddingUser = new EventEmitter();
  @Output() cancelEditingUser = new EventEmitter();
  roles: Role[];
  title: string;

  constructor(private dataGetter: DataGetterService) {
    this.dataGetter.getRoles().subscribe((data) => {
      this.roles = data;
    });
  }

  ngOnInit() {
  }

  saveUser() {
    this.dataGetter.editUser(this.user).subscribe(data => console.log(data));
  }

  cancelAdding() {
    this.cancelEditingUser.emit();
  }

}
