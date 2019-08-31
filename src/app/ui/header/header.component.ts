import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component';
import { Profile } from 'src/app/core/models/profile.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profile: Profile;
  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.profile.subscribe(res => (this.profile = res));
  }

  openLoginDialog(e) {
    e.preventDefault();
    this.dialog.open(LoginDialogComponent, {
      width: '450px'
    });
  }

  onLogout(e) {
    e.preventDefault();
    this.profile = null;
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
