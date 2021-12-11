import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/home/services/auth.service';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  error: any= {};
  loginError = '';
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.authService.logout();
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  onSubmit() {
    this.submitted = true;
    this.authService.login(this.username?.value, this.password?.value).subscribe((data) => {
      if (this.authService.isLoggedIn()) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        this.router.navigate([redirect]);
      } else {
        this.loginError = 'username or password is incorrect .';
      }
    },
      error => this.error = error);
  }
  get userControls() {
    return this.loginForm.controls;
  }
}
