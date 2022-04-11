import {Component, OnInit} from '@angular/core';
import {DataGetterService} from "../service/data-getter.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";
import {AuthGuard} from "../guards/auth.guard";
import {FireDataGetterService} from "../service/fire-data-getter.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string;
  password: string;

  constructor(private router: Router, private fireData: FireDataGetterService, public alertController: AlertController) {
  }

  ngOnInit() {
    //this.fireData.setUser('test');
    //this.router.navigate(['/home']);
  }

  login() {
    this.fireData.checkUser({
      username: this.userName,
      password: this.password
    }).then(
      res => {
        this.fireData.setUser(this.userName);
        this.router.navigate(['/home']);
      },
      err => {
        this.userNotExistAlert(err.message);
        console.log(err);
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
