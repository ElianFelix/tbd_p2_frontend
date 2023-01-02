import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models/Account';
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {
  accounts: Account[];
  userId: number = 1;

  constructor(private service: AccountService) {}

  ngOnInit(): void {
    this.service.getAccounts().subscribe((data) => (this.accounts = data));
  }
}
