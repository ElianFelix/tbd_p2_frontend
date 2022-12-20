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

  private accounts: Account[];
  private userId: number = 1;

  constructor(private service: AccountService) {
    this.service = service;
    this.accounts = service.getAccountsByUserId(this.userId);
  }

}
