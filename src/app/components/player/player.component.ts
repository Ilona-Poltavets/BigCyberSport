import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataGetterService, Player} from '../../service/data-getter.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  @Input() isNew: boolean;
  @Output() addPlayer = new EventEmitter();
  @Output() cancelAddingPlayer = new EventEmitter();
  @Output() cancelEditingPlayer = new EventEmitter();
  title: string;

  constructor(private route: ActivatedRoute, private dataGetter: DataGetterService) {
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
        teamId: null
      };
      this.title = 'Add player';
    }
  }

  addNew() {
    if (this.isNew) {
      this.player.teamId = +this.route.snapshot.paramMap.get('teamID');
      this.addPlayer.emit(this.player);
    }
  }

  savePlayer() {
    this.dataGetter.editPlayer(this.player).subscribe(data => console.log(data));
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
