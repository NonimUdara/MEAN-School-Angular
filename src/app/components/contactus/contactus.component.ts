import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { ContactusService } from '../../services/contactus.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  name: String | undefined;
  email: String | undefined;
  message: String | undefined;

  constructor(
    private validateService: ValidateService, 
    private flashMessage:FlashMessagesService,
    private authService:ContactusService,
    private router:Router
    
    ) { }

  ngOnInit() {

  }

  onRegisterSubmit() {
    const contactus = {
      name: this.name,
      email: this.email,
      message: this.message,
    }

    this.authService.contactusSend(contactus).subscribe(() => {

      this.flashMessage.show('Thanks for Giving Us a Message', { cssClass: 'alert-success', timeout: 3000 });

    }, err => {  
      // console.log(err)
      this.flashMessage.show('something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
    })
    }

}
