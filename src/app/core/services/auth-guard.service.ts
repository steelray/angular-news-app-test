import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.authService.profile) {
      this.router.navigate(['**'], {
        skipLocationChange: true,
        queryParams: { code: 403 }
      });
      return false;
    }
    return true;
  }
}
