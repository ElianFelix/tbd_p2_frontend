import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetails } from 'src/app/models/UserDetails';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  CurrentProfileState: UserDetails;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
