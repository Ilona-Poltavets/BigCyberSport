import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {TeamComponent} from "../components/team/team.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule, FormsModule, CommonModule],
    declarations: [
        TeamComponent
    ],
    exports: [RouterModule, TeamComponent]
})
export class HomePageRoutingModule {}
