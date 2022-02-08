import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TeamsDataService} from "../services/teams-data.service";

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss']
})
export class NewPlayerComponent implements OnInit {
  @Output() player = new EventEmitter();
  @Input() countPlayers!: number;
  @Input() team!: string;
  playerQuantity!: number;
  showForm = false;

  constructor(private dataService: TeamsDataService) {
  }

  ngOnInit(): void {
    this.dataService.getTeam(this.team).subscribe((elem) => this.playerQuantity = elem.playerQuantity);
  }

  onSubmit(myForm: any) {
    const field = myForm.form.controls;
    this.showForm = false;
    if (this.countPlayers < this.playerQuantity)
      this.dataService.addPlayer({
        name: field.name.value,
        nik: field.nik.value,
        team: this.team,
      })
  }
}
