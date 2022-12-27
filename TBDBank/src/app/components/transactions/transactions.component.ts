import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/models/Transaction';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  @Input() account = '';
  transactions: Transaction[] = [];
  filter: string = '';
  length: number = 100;
  pageSize: number = 10;

  constructor(
    private service: TransactionsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service.getTransactions().subscribe((transactions) => {
      this.transactions = transactions;
      this.length = transactions.length;
    });
  }

  onFilter() {
    this.router.navigate(['./'], {
      queryParams: { type: this.filter },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.router.navigate(['./'], {
      queryParams: { items: this.pageSize },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
    console.log(e);
  }
}
