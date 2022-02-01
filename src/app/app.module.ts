import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { NewTeamComponent } from './new-team/new-team.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamComponent,
    TeamComponent,
    NewTeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
