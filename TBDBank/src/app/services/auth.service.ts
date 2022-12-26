import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../models/UserLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userLogin: UserLogin) {
    return (
      // this is just the HTTP call, still need to handle the reception of the token
      this.http.post<UserLogin>('/api/login', userLogin)
    );
  }

  // delete local jwt and return to home page
  logout() {}
}
