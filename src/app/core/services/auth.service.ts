import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username = 'test';
  private password = 'testPass1';
  // tslint:disable-next-line:variable-name
  private _profile = new BehaviorSubject<Profile | null>(null);

  login(username, password): Observable<Profile | false> {
    if (this.username === username && this.password === password) {
      this._profile.next({
        username,
        fio: 'First Middlev Lastovich'
      });
      return this.profile;
    }
    return of(false);
  }

  logout(): void {
    this._profile.next(null);
  }

  get profile(): Observable<Profile | null> {
    // return {
    //   username: 'blabla',
    //   fio: 'First Middlev Lastovich'
    // };
    return this._profile;
  }
}
