import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
 notifications:String[];

  constructor() {
    this.notifications=[
      'Welcome to our application!',
      'You have successfully logged in',
      'Remember to save your changes frequently.',
      '',
      'Message sent successfully!',

    ]

   }
   getNotification():Observable<String>{
    return new Observable<String>((observer)=>{
    let counter =0;
    let notificationInterval= setInterval(()=>{
      if(counter==this.notifications.length){
        observer.complete();
      }
      if(this.notifications[counter]==''){
        observer.error('error -----> this notification is empty')
      }
      observer.next(this.notifications[counter])
      counter++
    },2000);
    return{
      unsubscribe:()=>{
        clearInterval(notificationInterval)

      }
    }

    } )
   }
}
