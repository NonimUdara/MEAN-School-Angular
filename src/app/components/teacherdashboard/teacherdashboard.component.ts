import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/teacher-crudauth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './teacherdashboard.component.html',
  styleUrls: ['./teacherdashboard.component.css']
})
export class TeacherdashboardComponent implements OnInit {

  teacher: any;

  constructor(

    private authService:AuthService, 
    private router:Router,
    private flashMessage: FlashMessagesService
    
    ) {}

  async ngOnInit(): Promise<void> {
    (await this.authService.getProfile()).subscribe((profile:any) => {
      this.teacher = profile.teacher;
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
