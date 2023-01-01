import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, Subscription, takeUntil, tap } from 'rxjs';

import { Notification } from 'src/app/models/Notification';
import { Request } from 'src/app/models/Request';
import { NotificationsService } from 'src/app/services/notifications.service';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  destroySubject: Subject<void> = new Subject<void>();

  notifications$: Observable<Notification[]>;
  //notifications: Notification[] = [];

  count$: Observable<number>;
  //count: number = 0;

  constructor(
    private nService: NotificationsService,
    private _snackbar: MatSnackBar,
    private refreshService: RefreshService
  ) {}

  ngOnInit(): void {
    this.notifications$ = this.nService.getNotifications();
    this.count$ = this.nService.countNotifications();
    this.subscriptions.push(
      this.nService.refreshSubject.subscribe(() => {
        this.refreshNotifications();
      }),
      this.refreshService.refreshSubject.subscribe(() => {
        this.refreshNotifications();
      })
    );
    this.nService.refreshSubject.next();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
    this.nService.refreshSubject.next();
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  handleClick(notification: Notification): void {
    if (notification.status?.status == 'UNREAD') {
      this.subscriptions.push(
        this.nService
          .markRead(notification.id!)
          .subscribe((_) => this.refreshNotifications())
      );
    }
  }

  handleDelete(notification: Notification): void {
    if (notification.request?.status?.id === 1) {
      this._snackbar.open('That Request is Still Pending!', 'close');
    } else {
      this.subscriptions.push(
        this.nService
          .deleteNotification(notification.id!)
          .subscribe((_) => this.refreshNotifications())
      );
    }
  }

  refreshNotifications(): void {
    // this.subscriptions.push(
    //   this.nService
    //     .getNotifications()
    //     .pipe(takeUntil(this.destroySubject))
    //     .subscribe(
    //       (notifications) => (this.notifications = notifications || [])
    //     )
    // );

    // this.subscriptions.push(
    //   this.nService
    //     .countNotifications()
    //     .pipe(takeUntil(this.destroySubject))
    //     .subscribe((count) => (this.count = count || 0))
    // );
    this.notifications$ = this.nService
      .getNotifications()
      .pipe(takeUntil(this.destroySubject));
    this.count$ = this.nService
      .countNotifications()
      .pipe(takeUntil(this.destroySubject));
  }
}
