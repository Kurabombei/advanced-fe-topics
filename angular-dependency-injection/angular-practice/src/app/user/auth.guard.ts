import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    // private afAuth: AngularFireAuth,
    private snack: NotificationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    return false;
  }

  // async canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Promise<boolean> {
  //
  //   const user = await this.afAuth.currentUser;
  //   const isLoggedIn = !!user;
  //   if (!isLoggedIn) {
  //     this.snack.authError();
  //   }
  //   return isLoggedIn;
  // }
}
