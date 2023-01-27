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
  phone: String | undefined;
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
      phone: this.phone,
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

    this.authService.registerTeacher(teacher).subscribe(() => {

      this.flashMessage.show('Teacher Registered Successfully!', { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['admindashboard']);

    }, err => {  
      // console.log(err)
      this.flashMessage.show('Username Was Taken', { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(['teacherregister']);
    })
    }
}
