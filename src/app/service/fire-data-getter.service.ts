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
  players: Observable<any[]>;

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

  getTeam(teamId) {
    return this.afs
      .collection('teams/' + teamId)
      .doc(teamId).get();
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

  getPlayers(teamId) {
    return this.afs.doc('teams/' + teamId).collection('players').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...(data as object)};
      }))
    );
  }

  editPlayer(player, teamId) {
    return this.afs
      .doc('teams/' + teamId + '/players/' + player.id)
      .update({
        name: player.name,
        nikname: player.nikname,
        surname: player.surname,
        age: player.age,
        isCap: player.isCap
      });
  }

  addPlayer(player, teamId) {
    return this.afs.doc('teams/' + teamId).collection('players')
      .add(
        {
          name: player.name,
          nikname: player.nikname,
          surname: player.surname,
          age: player.age,
          isCap: player.isCap
        })
      .then(() => {
        console.log('Player Created successfully!');
      })
      .catch(error => {
        console.error('Error writing document: ', error);
      });
  }

  deletePlayer(player, teamId) {
    return this.afs.doc('teams/' + teamId + '/players/' + player.id).delete();
  }
}
