import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../models/UserLogin';
import { environment as env } from '../environment/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = env.API_URL;

  constructor(private http: HttpClient) {}

  login(userLogin: UserLogin) {
    // this is just the HTTP call, still need to handle the reception of the token
    return this.http
      .post<{ token: string }>(`${this.apiUrl}login`, userLogin)
      .pipe(tap((res) => this.setJwtSession(res)));
  }

  private setJwtSession(authResponse: { token: string }) {
    return localStorage.setItem('id_token', authResponse.token);
  }

  public isLoggedIn() {
    if (localStorage.getItem('id_token')) {
      return true;
    }
    return false;
  }

  // delete local jwt practically ending session
  logout() {
    localStorage.removeItem('id_token');
    return !this.isLoggedIn();
  }
}
