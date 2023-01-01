import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from '../environment/environment';
import { Notification } from '../models/Notification';
import { RefreshService } from './refresh.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  url: string = environment.API_URL + 'notifications';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  refreshSubject: Subject<void> = new Subject<void>();

  constructor(
    private http: HttpClient,
    private refreshService: RefreshService
  ) {
    this.refreshSubject.subscribe(() => {
      this.refreshService.refreshSubject.next();
    });
  }

  countNotifications(): Observable<number> {
    return this.http.get<number>(this.url + '/count', {
      headers: this.getHeaders(),
    });
  }

  getNotifications(): Observable<Notification[]> {
    this.options.headers.set(
      'Authorization',
      localStorage.getItem('jwt') || ''
    );
    return this.http.get<Notification[]>(this.url, {
      headers: this.getHeaders(),
    });
  }

  createNotification(notification: Notification): Observable<boolean> {
    this.options.headers.set(
      'Authorization',
      localStorage.getItem('jwt') || ''
    );
    return this.http.post<boolean>(this.url, notification, {
      headers: this.getHeaders(),
    });
  }

  markRead(id: number): Observable<boolean> {
    this.options.headers.set(
      'Authorization',
      localStorage.getItem('jwt') || ''
    );
    return this.http.put<boolean>(this.url + '/' + id, null, {
      headers: this.getHeaders(),
    });
  }

  deleteNotification(id: number) {
    this.options.headers.set(
      'Authorization',
      localStorage.getItem('jwt') || ''
    );
    return this.http.delete(this.url + '/' + id, {
      headers: this.getHeaders(),
    });
  }

  getHeaders(): HttpHeaders {
    const jwt = localStorage.getItem('jwt') || '';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: jwt,
    });
  }

  refresh() {
    this.refreshSubject.next();
  }
}
