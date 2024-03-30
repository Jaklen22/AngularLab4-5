import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isUserLogged:boolean;
  username: string='';
  password: string='';
  constructor(private userAuth:UserAuthService){

    this.isUserLogged=this.userAuth.getUserLogged()
  }
login(){
this.userAuth.login()
this.isUserLogged= this.userAuth.getUserLogged()
}
logout(){
this.userAuth.logout()
this.isUserLogged= this.userAuth.getUserLogged()

}
}
