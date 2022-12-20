import { Injectable } from '@angular/core';
import { Transaction } from '../models/Transaction';
import { of, Observable } from 'rxjs';

const transactions: Transaction[] = [
  {
    amount: -52.32,
    type: 'Debit Card',
    status: 'Complete',
    category: 'Entertainment',
    description: 'Netflix Bill',
    date: Date.now(),
    merchantName: 'Netflix',
  },
  {
    amount: -783.32,
    type: 'Check',
    status: 'Processing',
    category: 'Food',
    description: 'Mcdonalds',
    date: Date.now(),
    merchantName: 'Mcdonalds',
  },
  {
    amount: -900.19,
    type: 'Other',
    status: 'Complete',
    category: 'Neccesities',
    description: 'Tier 3 Pokimane Sub',
    date: Date.now(),
    merchantName: 'Twitch',
  },
]

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  getTransactions(): Observable<Transaction[]> {
    return of(transactions);
  }


}
