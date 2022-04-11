import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class FireDataGetterService {

  teams: Observable<any[]>;
  private userName = '';

  constructor(private readonly afs: AngularFirestore, private afAuth: AngularFireAuth) {
    const teamsCollections = afs.collection('teams');
    this.teams = teamsCollections.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...(data as object)};
      }))
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Auth
  |--------------------------------------------------------------------------
  */

  checkUser(user) {
    return this.afAuth.signInWithEmailAndPassword(
      user.username,
      user.password,
    );
  }

  getUser() {
    return this.userName;
  }

  setUser(name: string) {
    this.userName = name;
  }

  /*
  |--------------------------------------------------------------------------
  | Teams
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | Players
  |--------------------------------------------------------------------------
  */

  getPlayers(id) {
    return this.afs.doc('teams/' + id).collection('players').valueChanges();
  }

}
