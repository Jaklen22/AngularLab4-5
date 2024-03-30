import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from './../../services/user-auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , RouterLinkActive,CommonModule],
templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isUserLogged!:boolean
  constructor(private userAuth:UserAuthService){}

  ngOnInit(): void {
    // this.isUserLogged=this.userAuth.getUserLogged()
    this.userAuth.getAuthSbject().subscribe({
      next:(status)=>{
        this.isUserLogged=status
      }
    })
    
  }

}
