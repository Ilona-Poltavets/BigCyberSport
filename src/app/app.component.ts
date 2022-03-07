import {Component} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {DataGetterService} from './service/data-getter.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //private cookieValue: string;

  constructor(/*private cookieService: CookieService, private dataGetter: DataGetterService*/) {
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  //public ngOnInit(): void {
  //  this.cookieService.set('user', this.dataGetter.getUser());
  //  this.cookieValue = this.cookieService.get('user');
  //}
}
