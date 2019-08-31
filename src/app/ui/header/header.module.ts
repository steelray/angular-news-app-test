import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component';
import { LoginDialogModule } from '../dialogs/login-dialog/login-dialog.module';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule, MatDialogModule, LoginDialogModule, MatIconModule],
  exports: [HeaderComponent],
  entryComponents: [LoginDialogComponent]
})
export class HeaderModule {}
