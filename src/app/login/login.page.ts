import {Component, OnInit} from '@angular/core';
import {DataGetterService} from "../service/data-getter.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string;

  constructor(private router: Router, private dataGetter: DataGetterService, public alertController: AlertController) {
  }

  ngOnInit() {
  }

  login() {
    if (this.dataGetter.userExists(this.userName)) {
      this.dataGetter.setUser(this.userName);
      this.router.navigate(['/home']);
    } else {
      this.userNotExistAlert();
    }
  }

  async userNotExistAlert() {
    const alert = await this.alertController.create({
      header: '!!! WARNING !!!',
      subHeader: 'Authentication error',
      message: `User ${this.userName} is not found` + '\nWrong username',
      buttons: ['OK']
    });

    await alert.present();
  }
}
