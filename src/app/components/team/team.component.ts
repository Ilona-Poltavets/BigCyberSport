import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataGetterService, Team} from "../../service/data-getter.service";

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
  @Output() cancelEditingTeam = new EventEmitter();
  title: string;

  constructor(private dataGetter: DataGetterService) {
  }

  ngOnInit() {
    if (this.isNew) {
      this.team = {
        id: null,
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

  saveTeam() {
    this.dataGetter.editTeam(this.team).subscribe(data => console.log(data));
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingTeam.emit();
    }
    if (!this.isNew) {
      this.cancelEditingTeam.emit();
    }
  }
}
