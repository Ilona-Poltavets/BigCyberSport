import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {DataExchangerService} from "../service/data-exchanger.service";

@Component({
  selector: 'app-data-sender',
  templateUrl: './data-sender.page.html',
  styleUrls: ['./data-sender.page.scss'],
})
export class DataSenderPage implements OnInit {
  textData: string;

  constructor(private router: Router, private dataExchanger: DataExchangerService) {
    this.textData = this.dataExchanger.getData();
  }

  ngOnInit() {
  }

  sendDataToHome() {
    this.dataExchanger.publishData(this.textData);
    this.router.navigate(['/home']);
  }

}
