import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, of, take, Observable } from 'rxjs';
import { Account } from 'src/app/models/Account';
import { Transaction } from 'src/app/models/Transaction';
import { AccountService } from 'src/app/services/account.service';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  account: Account;
  transactions: Transaction[] = [];
  filter: string = '';
  length: number = 100;
  page: number = 1;
  pageSize: number = 10;

  constructor(
    private tService: TransactionsService,
    //private aService: AccountService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //get the id parameter from the path param
    this.route.paramMap.subscribe((paramMap) => {
      //use the account id to retrieve an account object
      this.getAccountById(paramMap.get('id')!).subscribe((account) => {
        if (!account) {
          this.router.navigate(['/not-found']);
        } else {
          this.account = account;

          //use the account object to find the transactions for that account
          this.tService
            .getTransactions(account.id!)
            .subscribe((transactions) => {
              this.transactions = transactions;
              this.length = transactions.length;
            });
        }
      });
    });
  }

  onFilter() {
    this.router.navigate(['./'], {
      queryParams: { type: this.filter },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
    this.refreshTransactions();
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.page = e.pageIndex;
    this.router.navigate(['./'], {
      queryParams: { items: this.pageSize, page: this.page },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
    this.refreshTransactions();
  }

  refreshTransactions(): void {
    this.tService
      //filter transactions
      .getTransactions(this.account.id!, this.filter, this.pageSize, this.page)
      //make the method wait half a second and only get used once to prevent repeatedly querying database
      .pipe(debounceTime(500), take(1))
      .subscribe((transactions) => {
        this.transactions = transactions;
      });
  }

  //temporary method until accountservice is online
  getAccountById(accountId: string): Observable<any> {
    if (accountId == '5b4d0d40-8649-11ed-a1eb-0242ac120002') {
      return of({
        id: '5b4d0d40-8649-11ed-a1eb-0242ac120002',
        name: 'My Checking Account',
        balance: 20050.22,
        type: { id: 1, type: 'Checking' },
        user: {
          userName: 'bob',
          firstName: 'Bob',
          lastName: 'Loblaw',
          email: 'Bob.Loblaw@lawblog.com',
          password: 'bobloblawslawblog',
        },
      });
    } else {
      return of(null);
    }
  }
}
