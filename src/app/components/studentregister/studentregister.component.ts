import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/Student-crudauth.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './studentregister.component.html',
  styleUrls: ['./studentregister.component.css']
})
export class RegisterComponent implements OnInit {

  faUser =faUser;

  name: String | undefined;
  index: String | undefined;
  stream: String | undefined;
  year: String | undefined;
  email: String | undefined;
  nic: String | undefined;
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
    const student = {
      name: this.name,
      index: this.index,
      stream: this.stream,
      year: this.year,
      email: this.email,
      nic: this.nic,
      password: this.password
    }

    // Required Fields
    if (!this.validateService.validateStudentRegister(student)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return;
    }

    // Validate Email
    if(!this.validateService.validateEmail(student.email)) {
      this.flashMessage.show('please fill valid email', {cssClass: 'alert-danger', timeout: 3000});
        return;
    }

    // Register user
    this.authService.registerStudent(student).subscribe(data => {
      if(data) {
        this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['studentlogin']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['studentregister']);
      }
    });
    }
}