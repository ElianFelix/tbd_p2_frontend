import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../components/account-list/account';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  createNewAccount(account: Account): boolean {

    let body = {
      balance: account.balance,
      type: account.type,
      userId: account.userId
    }

    // this.http.post<string>(`${this.url}/accounts/new`, JSON.stringify(body));

    return true;

  }

  getAccountsByUserId(userId: number): Observable<Account[]> {

    // return this.http.get<Account[]>(`${this.url}accounts/${userId}`);

    // dummy data for testing
    const accList = [new Account(1, 1, 1, 1), new Account(1, 1, 1, 1), new Account(1, 1, 1, 1), new Account(1, 1, 1, 1)];
    return of(accList);

  }

}
