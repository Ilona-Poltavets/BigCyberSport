import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {DataGetterService, User} from "../service/data-getter.service";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private dataGetter: DataGetterService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggenIn = this.dataGetter.getUser() !== '';
    if (!isLoggenIn) {
      this.router.navigateByUrl('/login');
    }
    return isLoggenIn;
  }

  signIn(name) {
    // Local Dummy check, usually server request!
    let userObj: User;

    this.dataGetter.getUserDb(name).subscribe(data => userObj = data);

    return of(userObj).pipe(
      tap(user => {
        this.currentUser.next(user);
      })
    );
  }

  hasPermission(permissions: string[]): boolean {
    let rolePermission;
    this.dataGetter.getRoles().subscribe(data => {
      for (let i of data) {
        if (this.currentUser.value.roleId === i.id) {
          rolePermission = i.permissions;
        }
      }
    });
    const permissions2=rolePermission.split(';');
    console.log(permissions2);
    for (const permission of permissions) {
      if (!rolePermission || !permissions2.includes(permission)) {
        return false;
      }
    }
    return true;
  }
}
