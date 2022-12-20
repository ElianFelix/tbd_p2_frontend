import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/models/Transaction';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @Input() account ='';
  transactions: Transaction[] = [];
  filter:string='';
  length:number=100;
  pageSize:number=10;


  constructor(private service: TransactionsService, private router: Router){}

  ngOnInit(){
    this.service.getTransactions().subscribe(transactions => {
      this.transactions=transactions;
      this.length=transactions.length;
    });
  }

  onFilter(){
    this.router.navigate(
      ['/transactions'],
      {queryParams: {type: this.filter},
    queryParamsHandling: 'merge' }
    )
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize= e.pageSize;
    this.router.navigate(
      ['/transactions'],
      {queryParams: {items: this.pageSize},
      queryParamsHandling: 'merge' }
    )
    console.log(e);
  }

}
