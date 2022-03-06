import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Team} from "../../service/data-getter.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {

  @Input() team: Team;
  @Input() isNew: boolean;
  @Output() addTeam = new EventEmitter();
  @Output() cancelAddingTeam = new EventEmitter();
  title: string;

  constructor() {
  }

  ngOnInit() {
    if (this.isNew) {
      this.team = {
        name: '',
        discipline: '',
        coach: '',
        playerQuantity: null,
      };
      this.title = 'New team';
    }
  }

  addNew() {
    if (this.isNew) {
      this.addTeam.emit(this.team);
    }
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingTeam.emit();
    }
  }
}
