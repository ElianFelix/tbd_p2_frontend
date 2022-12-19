import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../components/account-list/account';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  createNewAccount(account: Account): boolean {

    let body = {
      balance: account.balance,
      type: account.type,
      userId: account.userId
    }

    this.http.post<string>(`${this.url}/accounts/new`, JSON.stringify(body));

    return true;

  }

  getAccountsByUserId(userId: number): Account[] {

    let accounts: Account[] = [];

    this.http.get<Account[]>(`${this.url}accounts/${userId}`).subscribe(data => {
      accounts = data;
    });

    return accounts;

  }

}
