import { Component,  OnInit } from '@angular/core';

import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models/Account';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreateTransferComponent } from '../create-transfer/create-transfer.component';
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {
  accounts: Account[];
  userId: number = 1;

  constructor(
    private service: AccountService,

  ) {}

  ngOnInit(): void {
    this.service.getAccounts() ;
    this.accounts = this.service.fetchAccounts();

    this.service.accountsUpdated.subscribe(()=> {
      this.accounts = this.service.fetchAccounts();
    });
  }

}
