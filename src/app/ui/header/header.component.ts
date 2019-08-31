import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/core/models/profile.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profile: Profile;
  constructor(public dialog: MatDialog, private authService: AuthService) {}

  ngOnInit() {
    this.profile = this.authService.profile;
  }

  openLoginDialog(e) {
    e.preventDefault();
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe((profile: Profile) => {
      this.profile = profile;
    });
  }

  onLogout(e) {
    e.preventDefault();
    this.profile = null;
    this.authService.logout();
  }
}
