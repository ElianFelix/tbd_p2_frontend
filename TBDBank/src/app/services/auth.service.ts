import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../models/UserLogin';
import { environment as env } from '../environment/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = env.API_URL;

  constructor(private http: HttpClient) {}

  login(userLogin: UserLogin) {
    // this is just the HTTP call, still need to handle the reception of the token
    return this.http.post<UserLogin>(`${this.apiUrl}login`, userLogin);
  }

  private setJwtSession(authResponse: { idToken: string }) {
    return localStorage.setItem('id_token', authResponse.idToken);
  }

  public isLoggedIn() {
    if (localStorage.getItem('id_token')) {
      return true;
    }
    return false;
  }

  // delete local jwt and return to home page
  logout() {
    localStorage.removeItem('id_token');
    return !this.isLoggedIn();
  }
}
