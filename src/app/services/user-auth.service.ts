import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
 private authSubject:BehaviorSubject<boolean>
isUserLogged :boolean = false;
  constructor() { 
    this.authSubject=new BehaviorSubject<boolean>(false)

  }
  login(){
    localStorage.setItem('token',"fjhgioghrwgohuwbgiubg")
    this.authSubject.next(true)

  }
  logout(){
    localStorage.removeItem('token')
    this.authSubject.next(false)
  }
  getUserLogged():boolean{
   return localStorage.getItem('token')?true:false;
  }
  getAuthSbject():BehaviorSubject<boolean>{
    return this.authSubject

  }
}
