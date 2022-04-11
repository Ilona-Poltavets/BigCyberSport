import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FireDataGetterService {

  teams: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
    const teamsCollections = afs.collection('teams');
    this.teams = teamsCollections.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...(data as object)};
      }))
    );
  }

  getTeams() {
    return this.teams;
  }

  editTeam(team) {
    return this.afs
      .doc('teams/' + team.id)
      .update({
        name: team.name,
        discipline: team.discipline,
        playerQuantity: team.playerQuantity,
        coach: team.coach
      });
  }

  addTeam(team) {
    this.afs.collection('teams')
      .add({
        name: team.name,
        discipline: team.discipline,
        playerQuantity: team.playerQuantity,
        coach: team.coach
      });
  }

  deleteTeam(team) {
    return this.afs
      .doc('teams/' + team.id)
      .delete();
  }

  getPlayers(id) {
    return this.afs.doc('teams/' + id).collection('players').valueChanges();
  }

}
