import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zion-notification',
  styleUrls: ['./notification.component.scss'],
  templateUrl: './notification.component.html'
})

export class NotificationComponent implements OnInit{
  @Input() notificationList: any;

  public notificationNumber: number = 0;

  constructor() {}

  ngOnInit() {
    this.notificationNumber = this.countNotifications(this.notificationList);
  }

  countNotifications(list: Array<any>) {
    let notificationSum = 0;
    for( let i = 0; i < list.length; i++) {
      notificationSum += +list[i].number;
    }
    return notificationSum;
  }
}