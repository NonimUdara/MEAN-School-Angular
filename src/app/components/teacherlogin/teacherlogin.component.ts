import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/teacher-crudauth.service'; 
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent implements OnInit {

  faUserTie =faUserTie;

  username!: String;
  password!: String;

  constructor (
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  dataRegister:any={}

  onLoginSubmit() {
    const teacher = {
      username: this.username,
      password: this.password
    }

    console.log("teacher :", teacher);
    
    this.authService.authenticateTeacher(teacher).subscribe((data) => {
      this.dataRegister = data;
      console.log("data :", data);

      console.log("this.dataRegister.token :", this.dataRegister.token);
      console.log("this.dataRegister.teacher :", this.dataRegister.teacher);
      
      if(this.dataRegister.success){
        this.authService.storeTeacherData(this.dataRegister.token, this.dataRegister.teacher);
        this.flashMessage.show('You are now loggged in', {
          cssClass: 'alert-success',
          timeout: 5000});
        this.router.navigate(['teacherdashboard']);
      } else {
        this.flashMessage.show(this.dataRegister.msg, {
          cssClass: 'alert-danger',
          timeout: 5000});
        this.router.navigate(['teacherlogin']);
      }
    });

  }

}
