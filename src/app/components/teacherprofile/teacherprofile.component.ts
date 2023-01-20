import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/teacher-crudauth.service';
import { Router } from '@angular/router';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacherprofile',
  templateUrl: './teacherprofile.component.html',
  styleUrls: ['./teacherprofile.component.css']
})
export class TeacherprofileComponent implements OnInit {

  faUserTie =faUserTie;
  teacher: any;

  constructor(private authService:AuthService, private router:Router) {  }

  ngOnInit() {
    this.authService.getProfile().subscribe((profile:any) => {
      this.teacher = profile.teacher;
    },
     err => {
       console.log(err);
       return;
     });
  }

}
