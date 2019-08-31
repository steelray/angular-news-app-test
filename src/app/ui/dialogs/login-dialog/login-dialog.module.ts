import { NgModule } from '@angular/core';
import { LoginDialogComponent } from './login-dialog.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginDialogComponent],
  imports: [
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [LoginDialogComponent]
})
export class LoginDialogModule {}
