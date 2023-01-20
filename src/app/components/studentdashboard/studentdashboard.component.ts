import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Student-crudauth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit{
  
  student: any;

  constructor(
    private authService:AuthService, 
    private router:Router,
    private flashMessage: FlashMessagesService
    
    ) { }

  ngOnInit(){
    this.authService.getProfile().subscribe((profile:any) => {
      this.student = profile.student;
    },
     err => {
       console.log(err);
       return;
     });
  }
  
  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You are log out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['']);
    return false;
  }

}
