import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {TeamComponent} from './team/team.component';
import {NewTeamComponent} from './new-team/new-team.component';
import {TeamListComponent} from './team-list/team-list.component';
import {PlayerListComponent} from './player-list/player-list.component';
import {RouterModule, Routes} from "@angular/router";
import {PlayerComponent} from './player/player.component';
import {NewPlayerComponent} from './new-player/new-player.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'teams', component: TeamListComponent},
  {path: 'players/:tmId', component: PlayerListComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamComponent,
    TeamComponent,
    NewTeamComponent,
    TeamListComponent,
    PlayerListComponent,
    PlayerComponent,
    NewPlayerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
