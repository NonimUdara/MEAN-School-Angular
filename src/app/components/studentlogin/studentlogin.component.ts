import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Student-crudauth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class LoginComponent implements OnInit {

  faUser =faUser;

  index!: String;
  password!: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  dataRegister:any={}

  onLoginSubmit() {
    const student = {
      index: this.index,
      password: this.password
    }

    this.authService.authenticateStudent(student).subscribe(data => {
      this.dataRegister = data;
      if(this.dataRegister.success){
        this.authService.storeStudentData(this.dataRegister.token, this.dataRegister.student);
        this.flashMessage.show('You are now loggged in', {
          cssClass: 'alert-success',
          timeout: 5000});
        this.router.navigate(['studentdashboard']);
      } else {
        this.flashMessage.show(this.dataRegister.msg, {
          cssClass: 'alert-danger',
          timeout: 5000});
        this.router.navigate(['studentlogin']);
      }
    });

  }

}
