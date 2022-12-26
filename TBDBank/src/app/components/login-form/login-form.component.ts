import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { UserLogin } from 'src/app/models/UserLogin';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      let userLogin: UserLogin = {
        userName: String(this.loginForm.value.userName),
        password: String(this.loginForm.value.password),
      };
      console.log(userLogin);
      // placeholder call, still need to handle output and save into a more permanent storage
      this.authService.login(userLogin).subscribe((res) => {
        console.log('User is logged in');
        this.router.navigateByUrl('/');
      });
    }
  }
}
