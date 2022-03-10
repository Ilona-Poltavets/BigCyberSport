import {Component, OnInit} from '@angular/core';
import {DataGetterService, Role, User} from "../service/data-getter.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.page.html',
  styleUrls: ['./registrate.page.scss'],
})
export class RegistratePage implements OnInit {
  userName: string;
  password: string;
  confirm_password: string;
  users: User[];

  constructor(private dataGetter: DataGetterService, public alertController: AlertController, private router: Router) {
    this.dataGetter.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit() {
  }

  registrate() {
    let canAdd = true;
    if (this.password !== this.confirm_password) {
      canAdd = false;
      this.alert('Passwords do not match');
    }
    for (let i of this.users) {
      if (i.username === this.userName) {
        canAdd = false;
        this.alert('This user already exists');
      }
    }
    if (canAdd) {
      this.dataGetter.addUser(this.userName, this.password).subscribe(data=>console.log(data));
      this.router.navigate(['/login']);
    }
  }

  async alert(massage) {
    const alert = await this.alertController.create({
      header: '!!! WARNING !!!',
      subHeader: 'Registration error',
      message: massage,
      buttons: ['OK']
    });

    await alert.present();
  }
}
