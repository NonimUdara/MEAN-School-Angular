import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/teacher-crudauth.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherregister',
  templateUrl: './teacherregister.component.html',
  styleUrls: ['./teacherregister.component.css']
})
export class TeacherregisterComponent implements OnInit {

  name: String | undefined;
  gender: String | undefined;
  age: String | undefined;
  worked: String | undefined;
  subject: String | undefined;
  nic: String | undefined;
  email: String | undefined;
  username: String | undefined;
  password: String | undefined;

  constructor(
    private validateService: ValidateService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router
    
    ) { }

  ngOnInit() {

  }

  onRegisterSubmit() {
    const teacher = {
      name: this.name,
      gender: this.gender,
      age: this.age,
      worked: this.worked,
      subject: this.subject,
      nic: this.nic,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if (!this.validateService.validateTeacherRegister(teacher)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return;
    }

    //Validate Email
    if(!this.validateService.validateEmail(teacher.email)) {
      this.flashMessage.show('please fill valid email', {cssClass: 'alert-danger', timeout: 3000});
        return;
    }

    // Register user
    this.authService.registerTeacher(teacher).subscribe(data => {
      if(data) {
        this.flashMessage.show('Teacher Account Created Successfully!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['admindashboard']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['teacherregister']);
      }
    });
    }
}
