import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {DataGetterService} from "../service/data-getter.service";
import {FireDataGetterService} from "../service/fire-data-getter.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dataGetter: DataGetterService, private router: Router, private fireData: FireDataGetterService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggenIn = this.fireData.getUser() !== '';
    if (!isLoggenIn) {
      this.router.navigateByUrl('/login');
    }
    return isLoggenIn;
  }
}
