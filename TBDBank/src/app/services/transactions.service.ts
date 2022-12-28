import { Injectable } from '@angular/core';
import { Transaction } from '../models/Transaction';
import { of, Observable } from 'rxjs';

const results = {
  content: [
    {
      id: 1,
      amount: -52.32,
      type: { id: 1, type: 'Debit' },
      status: { id: 2, status: 'Complete' },
      category: 'Entertainment',
      description: 'Netflix Bill',
      date: Date.now(),
      merchantName: 'Netflix',
    },
    {
      id: 2,
      amount: -783.32,
      type: { id: 3, type: 'Check' },
      status: { id: 1, status: 'Processing' },
      category: 'Food',
      description: 'Mcdonalds',
      date: Date.now(),
      merchantName: 'Mcdonalds',
    },
    {
      id: 3,
      amount: -900.19,
      type: { id: 5, type: 'Other' },
      status: { id: 2, status: 'Complete' },
      category: 'Neccesities',
      description: 'Tier 3 Pokimane Sub',
      date: Date.now(),
      merchantName: 'Twitch',
    },
  ],
  pageable: {
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 2,
    paged: true,
    unpaged: false,
  },
  last: false,
  totalPages: 50,
  totalElements: 100,
  first: true,
  size: 2,
  number: 0,
  sort: {
    empty: true,
    sorted: false,
    unsorted: true,
  },
  numberOfElements: 200,
  empty: false,
};

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor() {}

  getTransactions(
    accountId: string,
    filter: string = '',
    pageSize: number = 10,
    page: number = 1
  ): Observable<any> {
    return of(results);
  }

  getTransactionById(id: number): Observable<Transaction> {
    return of(results.content.find((transaction) => transaction.id == id)!);
  }
}
