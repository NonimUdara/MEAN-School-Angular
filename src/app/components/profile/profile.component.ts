import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Student-crudauth.service';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  faUser =faUser;
  student: any;

  constructor(
    private authService:AuthService, 
    private router:Router

    ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe((profile:any) => {
      this.student = profile.student;
    },
     err => {
       console.log(err);
       return;
     });
  }
}