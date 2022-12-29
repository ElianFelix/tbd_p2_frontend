import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/Transaction';
import { of, Observable } from 'rxjs';
import { environment } from '../environment/environment';

/*pageable object format
  content: [transactions],
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
*/

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {

  url: string = environment.API_URL + "transactions";


  constructor(private http: HttpClient) {}

  getTransactions(
    accountId: string,
    filter: string = '',
    pageSize: number = 10,
    page: number = 0
  ): Observable<any> {
    const params = {
      page: page,
      size: pageSize,
      filter: filter
    }
    return this.http.get<any>(`${this.url}/${accountId}`, { params })
    //return of(results);
  }

  getTransactionById(id: number): Observable<Transaction> {
    return this.http.get<any>(`${this.url}/transaction/${id}`);
  }
}
