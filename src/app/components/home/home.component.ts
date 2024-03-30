import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit ,OnDestroy{
  subscription !:Subscription;
  notifications: String[] = [];

  constructor(private _notifictionService:NotificationService){}
  ngOnInit(): void {
    this.subscription = this._notifictionService.getNotification().subscribe({
      next: (notification) => {
        this.notifications.push(notification);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Notification completed successfully');
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    
  }

}
