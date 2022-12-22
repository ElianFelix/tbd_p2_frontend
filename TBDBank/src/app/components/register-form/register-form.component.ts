import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { UserDetails } from '../../models/UserDetails';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),

    firstName: new FormControl(''),

    lastName: new FormControl(''),

    email: new FormControl('', Validators.required),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(private usersService: UsersService) {}

  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      let userDetails: UserDetails = {
        userName: this.registerForm.value.userName,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      };
      console.log(userDetails);
      this.usersService.registerUser(userDetails).subscribe((status) => {
        console.log(status);
      });
    }
  }
}
