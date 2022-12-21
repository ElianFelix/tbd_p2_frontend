import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { Account } from './account';
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent {

  private accounts!: Account[];
  private userId: number = 1;

  get Accounts(): Account[] {
    return this.accounts;
  }

  constructor(private service: AccountService) {
    this.service = service;

    service.getAccountsByUserId(this.userId).subscribe(data => this.accounts = data);
  }

}
