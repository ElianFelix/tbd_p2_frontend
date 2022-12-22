import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { UserLogin } from 'src/app/models/UserLogin';

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

  constructor(private usersService: UsersService) {}

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      let userLogin: UserLogin = {
        userName: this.loginForm.value.userName,
        password: this.loginForm.value.password,
      };
      console.log(userLogin);
    }
  }
}
