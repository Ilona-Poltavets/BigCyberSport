import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataGetterService, Player} from '../../service/data-getter.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FireDataGetterService} from "../../service/fire-data-getter.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;
  @Input() isNew: boolean;
  @Input() teamId: string;
  @Output() addPlayer = new EventEmitter();
  @Output() cancelAddingPlayer = new EventEmitter();
  @Output() cancelEditingPlayer = new EventEmitter();
  title: string;

  constructor(private route: ActivatedRoute, private fireData: FireDataGetterService) {
  }

  ngOnInit() {
    if (this.isNew) {
      this.player = {
        id: null,
        name: '',
        nikname: '',
        surname: '',
        age: null,
        isCap: null,
      };
      this.title = 'Add player';
    }
  }

  addNew() {
    if (this.isNew) {
      this.addPlayer.emit(this.player);
    }
  }

  savePlayer() {
    console.log(this.player);
    this.fireData.editPlayer(this.player, this.teamId);
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingPlayer.emit();
    }
    if (!this.isNew) {
      this.cancelEditingPlayer.emit();
    }
  }
}
