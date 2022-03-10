import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';

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

export interface User {
  id: number;
  username: string;
  password: string;
  roleId: number;
  token: string;
}

export interface Role {
  id: number;
  name: string;
  permissions: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  baseUrl = 'http://localhost/API/';
  teams = [];
  players = [];
  users = [];

  private userName = this.cookieService.get('user');
  private token = this.cookieService.get('token');

  constructor(private cookieService: CookieService, private http: HttpClient) {
  }

  /*
  |--------------------------------------------------------------------------
  | Auth
  |--------------------------------------------------------------------------
  */
  checkUser(user) {
    return this.http.post<any>(this.baseUrl + '?action=login', user);
  }

  setToken(token: string) {
    this.cookieService.set('token', token);
    this.token = token;
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

  getRoles() {
    return this.http.get<any>(this.baseUrl + '?action=get_roles&token=' + this.token);
  }

  getUsers() {
    return this.http.get<any>(this.baseUrl + '?action=get_users&token=' + this.token);
  }

  getUserDb(username) {
    return this.http.get<any>(this.baseUrl + `?action=get_user&user=${username}&token=${this.token}`);
  }

  editUser(user) {
    console.log(user);
    return this.http.post<any>(this.baseUrl + '?action=edit_user&token=' + this.token, user);
  }

  addUser(username, password) {
    const user: { password: any; roleId: number; username: any } = {
      password,
      roleId: 2,
      username,
    };
    return this.http.post<any>(this.baseUrl + '?action=add_user&token=' + this.token, user);
  }

  deleteUser(user) {
    return this.http.post<any>(this.baseUrl + '?action=delete_user&token=' + this.token, user);
  }

  /*
  |--------------------------------------------------------------------------
  | Teams
  |--------------------------------------------------------------------------
  */
  getTeams() {
    return this.http.get<any>(this.baseUrl + '?action=get_teams&token=' + this.token);
  }

  getTeam(id) {
    return this.http.get<any>(this.baseUrl + `?action=get_team&team=${id}&token=${this.token}`);
  }

  editTeam(team) {
    return this.http.post<any>(this.baseUrl + '?action=edit_team&token=' + this.token, team);
  }

  addTeam(team) {
    return this.http.post<any>(this.baseUrl + '?action=add_team&token=' + this.token, team);
  }

  deleteTeam(team) {
    return this.http.post<any>(this.baseUrl + '?action=delete_team&token=' + this.token, team);
  }

  /*
  |--------------------------------------------------------------------------
  | Players
  |--------------------------------------------------------------------------
  */
  getPlayers(teamId) {
    return this.http.get<any>(this.baseUrl + `?action=get_players&team=${teamId}` + `&token=${this.token}`);
  }

  editPlayer(player) {
    player.isCap = player.isCap.toString();
    return this.http.post<any>(this.baseUrl + '?action=edit_player&token=' + this.token, player);
  }

  addPlayer(player, id) {
    player.teamId = id;
    if (player.isCap == null) {
      player.isCap = false;
    }
    player.isCap = player.isCap.toString();
    return this.http.post<any>(this.baseUrl + '?action=add_player&token=' + this.token, player);
  }

  deletePlayer(player) {
    return this.http.post<any>(this.baseUrl + '?action=delete_player&token=' + this.token, player);
  }
}
