import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../models/Account';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url: string = environment.API_URL+"accounts";
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

  constructor(private http: HttpClient) { }

  createNewAccount(account: Account): Observable<boolean> {

    return this.http.post<boolean>(this.url, account, this.httpOptions);

  }

  getAccounts(): Observable<Account[]> {

     return this.http.get<Account[]>(this.url, this.httpOptions);

  }

}
