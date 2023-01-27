import { Component, OnInit } from '@angular/core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  faUserSecret =faUserSecret;

  username:string | undefined;
  password:string | undefined;
  constructor( 
    private router: Router,
    private flashMessage: FlashMessagesService
    ) {}

  ngOnInit() {

    // LoginAdmin() 
    // {
    //   if(this.username == "Admin" && this.password == "12345")

    // }
  }

  onLoginSubmit() {
    const admin = {
      username: this.username,
      password: this.password,
    }

    if(this.username == "Admin" && this.password == "12345")
    {
      this.router.navigate(['admindashboard'])
    }
    else
    {
      this.flashMessage.show('Username or Password is incorrect', {
        cssClass: 'alert-danger',
        timeout: 5000});
    }


}
}
