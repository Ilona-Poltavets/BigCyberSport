import {Component, OnInit} from '@angular/core';
import {DataGetterService} from "../service/data-getter.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";
import {AuthGuard} from "../guards/auth.guard";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string;
  password: string;

  constructor(private router: Router, private dataGetter: DataGetterService, public alertController: AlertController) {
  }

  ngOnInit() {
    this.dataGetter.setUser('FakeUser');
    this.router.navigate(['/home']);
  }

  login() {
    this.dataGetter.checkUser({
      username: this.userName,
      password: this.password
    }).subscribe(
      result => {
        if (result.hasOwnProperty('error')) {
          this.userNotExistAlert(result.error);
        } else {
          if (result.hasOwnProperty('token')) {
            this.dataGetter.setUser(this.userName);
            this.dataGetter.setToken(result.token);
            this.router.navigate(['/home']);
          } else {
            this.userNotExistAlert('Unexpected error');
          }
        }
      }
    );
  }

  async userNotExistAlert(massage) {
    const alert = await this.alertController.create({
      header: '!!! WARNING !!!',
      subHeader: 'Authentication error',
      message: massage,
      buttons: ['OK']
    });

    await alert.present();
  }
}
