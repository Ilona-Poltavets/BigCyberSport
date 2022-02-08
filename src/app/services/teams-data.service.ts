import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamsDataService {
  private teams = [
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
    }
  ]
  private players = [
    {name: 'Aleksandr Kostyliev', nik: 's1mple', team: 'NaVi'},
    {name: 'Denis  Sharipov', nik: 'electroNic', team: 'NaVi'},
    {name: 'Kirill Mikhailov', nik: 'Boombl4', team: 'NaVi'},
    {name: 'Ilya Zalutskiy', nik: 'Perfecto', team: 'NaVi'},
    {name: 'Valeriy Vakhovskiy', nik: 'b1t', team: 'NaVi'},
    {name: 'Abay Khasenov', nik: 'HObbit', team: 'Gambit'},
    {name: 'Sergey Rykhtorov', nik: 'Ax1Le', team: 'Gambit'},
    {name: 'Vladislav Gorshkov', nik: 'nafany', team: 'Gambit'},
  ];

  constructor() {
  }

  getTeams(): Observable<any[]> {
    return of(this.teams);
  }

  getTeam(name:string):Observable<any>{
    let team=this.teams.find(t=>t.name===name)
    return of(team);
  }

  addTeam(team: any) {
    this.teams.push(team);
  }

  deleteTeam(index: number) {
    this.teams.splice(index, 1);
  }

  getPlayers(teamName: string): Observable<any[]> {
    return of(this.players.filter(elem => {
      return elem.team === teamName;
    }));
  }

  addPlayer(player: any) {
    this.players.push(player);
  }

  deletePlayer(nik:string){
    let index=this.players.findIndex(p=>p.nik===nik);
    this.players.splice(index,1);
  }
}
