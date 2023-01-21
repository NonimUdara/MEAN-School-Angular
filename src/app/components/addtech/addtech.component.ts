import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { TechcrudService } from '../../services/techcrud.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtech',
  templateUrl: './addtech.component.html',
  styleUrls: ['./addtech.component.css']
})
export class AddtechComponent implements OnInit {

  name: String | undefined;
  date: String | undefined;
  title: String | undefined;
  duration: String | undefined;
  link: String | undefined;
  id: String | undefined;
  passcode: String | undefined;

  constructor(
    
    private validateService: ValidateService, 
    private flashMessage:FlashMessagesService,
    private authService:TechcrudService,
    private router:Router
    
    ) { }

     ngOnInit(): void {
    
     }
   
     onRegisterSubmit() {
       const meeting = {
         name: this.name,
         date: this.date,
         title: this.title,
         duration: this.duration,
         link: this.link,
         id: this.id,
         passcode: this.passcode
       }
   
       // Required Fields
       if (!this.validateService.validateMeeting(meeting)) {
         this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
         return;
       }
   
       // Add Meeting
       this.authService.add(meeting).subscribe(data => {
         if(data) {
           this.flashMessage.show('Meeting Added Successfully!', {cssClass: 'alert-success', timeout: 3000});
           this.router.navigate(['teacherdashboard']);
         } else {
           this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
           this.router.navigate(['addmaths']);
         }
       });
       }

}
