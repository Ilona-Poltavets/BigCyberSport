import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

export interface Team {
  name: string;
  discipline: string;
  coach: string;
  playerQuantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  private userName = '';

  private users = [
    'admin', 'John', 'Anna'
  ];

  private teams: Team[] = [
    {
      name: 'NaVi',
      discipline: 'CS:GO',
      coach: 'Andrey \'B1ad3\' Gorodenskiy',
      playerQuantity: 5
    },
    {
      name: 'Gambit',
      discipline: 'CS:GO',
      coach: 'Konstantin \'groove\' Pikiner',
      playerQuantity: 5
    },
  ];

  constructor() {
  }

  getUser() {
    return this.userName;
  }

  setUser(name: string) {
    this.userName = name;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

  getTeams(): Observable<Team[]> {
    return of(this.teams);
  }

  addTeam(team: Team) {
    this.teams.push(team);
  }

  deleteTeam(index) {
    this.teams.splice(index, 1);
  }
}
