import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  userNameControl = new FormControl('');

  firstNameControl = new FormControl('');

  lastNameControl = new FormControl('');

  emailControl = new FormControl('');

  passwordControl = new FormControl('');
}
