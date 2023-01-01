import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserDetails } from '../models/UserDetails';
import { environment as env } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersUrl = env.API_URL + '/users'; // URL to web api users collection

  constructor(private http: HttpClient) {}

  registerUser(userForm: UserDetails): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(userForm);
    console.log(body);
    return this.http.post<UserDetails>(this.usersUrl, userForm, {
      headers: headers,
    });
  }
}
