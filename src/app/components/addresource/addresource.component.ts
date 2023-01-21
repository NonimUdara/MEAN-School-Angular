import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { ResourcecrudService } from '../../services/resourcecrud.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addresource',
  templateUrl: './addresource.component.html',
  styleUrls: ['./addresource.component.css']
})
export class AddresourceComponent implements OnInit {

  name: String | undefined;
  rname: String | undefined;
  subject: String | undefined;
  stream: String | undefined;
  author: String | undefined;
  link: String | undefined;

  constructor(
    
    private validateService: ValidateService, 
    private flashMessage:FlashMessagesService,
    private authService:ResourcecrudService,
    private router:Router
    
    ) { }

     ngOnInit(): void {
    
     }
   
     onRegisterSubmit() {
       const resources = {
         name: this.name,
         rname: this.rname,
         subject: this.subject,
         stream: this.stream,
         author: this.author,
         link: this.link
       }
   
       // Required Fields
       if (!this.validateService.validateResources(resources)) {
         this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
         return;
       }
   
       // Add Meeting
       this.authService.add(resources).subscribe(data => {
         if(data) {
           this.flashMessage.show('Resources Added Successfully!', {cssClass: 'alert-success', timeout: 3000});
           this.router.navigate(['teacherdashboard']);
         } else {
           this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
           this.router.navigate(['addresources']);
         }
       });
       }

}
