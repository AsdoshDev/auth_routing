import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { debuglog } from 'util';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    if (this._authService.isAuthenticated()) {
      return true;
    }

    // navigate to login page
    this._router.navigate(['/login']);
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}

