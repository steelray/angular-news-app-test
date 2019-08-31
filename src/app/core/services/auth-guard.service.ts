import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(): Observable<boolean> {
    // console.log(this.isAuthed);
    return this.authService.profile.pipe(
      map(res => {
        this.router.navigate(['**'], {
          queryParams: { code: 403 },
          skipLocationChange: true
        });
        return res ? true : false;
      })
    );
  }
}
