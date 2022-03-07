import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

export interface Team {
  id: number;
  name: string;
  discipline: string;
  coach: string;
  playerQuantity: number;
}

export interface Player {
  id: number;
  name: string;
  nikname: string;
  surname: string;
  age: number;
  isCap: boolean;
  teamId: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  private userName = this.cookieService.get('user');

  private users = [
    'admin', 'John', 'Anna'
  ];

  private teams: Team[] = [
    {
      id: 1,
      name: 'NaVi',
      discipline: 'CS:GO',
      coach: 'Andrey \'B1ad3\' Gorodenskiy',
      playerQuantity: 5
    },
    {
      id: 2,
      name: 'Gambit',
      discipline: 'CS:GO',
      coach: 'Konstantin \'groove\' Pikiner',
      playerQuantity: 5
    },
  ];

  private players = [
    {
      id: 1,
      name: 'Alexandr',
      nikname: 's1mple',
      surname: 'Kostylev',
      age: 24,
      isCap: false,
      teamId: 1
    },
    {
      id: 2,
      name: 'Denis',
      nikname: 'electroNic',
      surname: 'Sharipov',
      age: 23,
      isCap: false,
      teamId: 1
    },
    {
      id: 3,
      name: 'Kirill',
      nikname: 'BoombI4',
      surname: 'Mikhailov',
      age: 23,
      isCap: true,
      teamId: 1
    },
    {
      id: 4,
      name: 'Ilya',
      nikname: 'Perfecto',
      surname: 'Zalutskiy',
      age: 22,
      isCap: false,
      teamId: 1
    },
    {
      id: 5,
      name: 'Abay',
      nikname: 'HObbit',
      surname: 'Khasenov',
      age: 27,
      isCap: false,
      teamId: 2
    },
    {
      id: 6,
      name: 'Valeriy',
      nikname: 'b1t',
      surname: 'Vakhovskiy',
      age: 19,
      isCap: false,
      teamId: 1
    },
    {
      id: 7,
      name: 'Dmitry',
      nikname: 'sh1ro',
      surname: 'Sokolov',
      age: 20,
      isCap: false,
      teamId: 2
    },
    {
      id: 8,
      name: 'Timofey',
      nikname: 'interz',
      surname: 'Yakushin',
      age: 21,
      isCap: false,
      teamId: 2
    },
    {
      id: 9,
      name: 'Sergey',
      nikname: 'Ax1Le',
      surname: 'Rykhtorov',
      age: 19,
      isCap: false,
      teamId: 2
    },
    {
      id: 10,
      name: 'Vladislav',
      nikname: 'nafany',
      surname: 'Gorshkov',
      age: 20,
      isCap: true,
      teamId: 2
    },
  ];

  constructor(private cookieService: CookieService) {
  }

  getUser() {
    return this.userName;
  }

  setUser(name: string) {
    this.cookieService.set('user', name);
    this.userName = name;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

  getTeams(): Observable<Team[]> {
    return of(this.teams);
  }

  getTeam(teamId: number): Team {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    return this.teams.filter(function(val) {
      return val.id === teamId;
    })[0];
  }

  addTeam(team: Team) {
    team.id = this.teams.length + 1;
    this.teams.push(team);
  }

  deleteTeam(index) {
    this.teams.splice(index, 1);
  }

  getPlayer(teamId: number): Observable<any[]> {
    return of(this.players.filter(elem => elem.teamId === teamId));
  }

  addPlayer(player: Player) {
    player.id = this.players.length + 1;
    this.players.push(player);
  }

  deletePlayer(index) {
    const elemId = this.players.findIndex(n => n.id === index);
    if (elemId !== -1) {
      this.players.splice(elemId, 1);
    }
  }
}
