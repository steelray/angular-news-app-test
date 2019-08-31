import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username = 'test';
  private password = 'testPass1';
  // tslint:disable-next-line:variable-name
  private _profile: Profile;
  login(username, password) {
    if (this.username === username && this.password === password) {
      this._profile = {
        username,
        fio: 'First Middlev Lastovich'
      };
      return this.profile;
    }
    return false;
  }

  logout(): void {
    this._profile = null;
  }

  get profile() {
    // return {
    //   username: 'blabla',
    //   fio: 'First Middlev Lastovich'
    // };
    return this._profile;
  }
}
