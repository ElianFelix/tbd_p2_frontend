import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.API_URL + 'auth/';

  user: string;

  constructor(private http: HttpClient) {}

  login(userName: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http
      .post<any>(
        this.url + 'login',
        { username: userName, password: password },
        { headers }
      )
      .subscribe((res) => {
        localStorage.setItem('jwt', 'Bearer ' + res.accessToken);
        localStorage.setItem('username', res.username);
      });
  }

}
