import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PlayersPage} from './players.page';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PlayerComponent} from "../components/player/player.component";

const routes: Routes = [
  {
    path: '',
    component: PlayersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule, FormsModule, CommonModule],
  declarations: [
    PlayerComponent
  ],
  exports: [RouterModule, PlayerComponent]
})
export class PlayersPageRoutingModule {
}
