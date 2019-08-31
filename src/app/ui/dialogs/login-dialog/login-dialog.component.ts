import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Profile } from 'src/app/core/models/profile.model';
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  form: FormGroup;
  usernamePatt = '^[a-z0-9_-]{3,15}$';
  passwordPatt = '^(?=.*[a-z])[0-9a-zA-Z_!-+]{6,16}';
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.pattern(this.usernamePatt)]
      ],
      password: [
        '',
        [Validators.required, Validators.pattern(this.passwordPatt)]
      ]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const { username, password } = this.form.value;
    const profile: Profile | boolean = this.authService.login(
      username,
      password
    );
    if (profile) {
      this.dialogRef.close(profile);
    } else {
      this.password.markAsTouched();
      this.password.setErrors({ invalidData: true });
      // console.log(this.username, this.password);
    }
  }
  onCancel(e: any = null) {
    e.preventDefault();
    this.dialogRef.close();
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
}
