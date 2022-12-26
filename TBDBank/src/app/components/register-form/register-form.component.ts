import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { UserDetails } from '../../models/UserDetails';
import { Location } from '@angular/common';

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
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  userExists = true;

  constructor(private usersService: UsersService, private location: Location) {}

  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      let userDetails: UserDetails = {
        userName: String(this.registerForm.value.userName),
        firstName: String(this.registerForm.value.firstName),
        lastName: String(this.registerForm.value.lastName),
        email: String(this.registerForm.value.email),
        password: String(this.registerForm.value.password),
      };

      // request to precheck if username is available
      this.usersService
        .userExists(userDetails.userName)
        .subscribe((res) => (this.userExists = res.exists));
      if (this.userExists) {
        alert();
        return;
      }

      // post request to create user with userDetails logs the response to console (might need to handle failure)
      console.log(userDetails);
      this.usersService.registerUser(userDetails).subscribe((res) => {
        console.log(res);
      });
      this.location.back();
    }
  }

  alert() {
    window.alert('username already in use');
  }
}
