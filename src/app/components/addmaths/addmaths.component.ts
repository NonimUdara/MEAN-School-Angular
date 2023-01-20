import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MathscrudService } from './../../services/mathscrud.service';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-addmaths',
  templateUrl: './addmaths.component.html',
  styleUrls: ['./addmaths.component.css']
})
export class AddmathsComponent implements OnInit {

  mathForm: FormGroup;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private flashMessage:FlashMessagesService,
    private crudApi: MathscrudService) {
      this.mathForm = this.formBuilder.group({
        name:[''],
        date:[''],
        title:[''],
        duration:[''],
        link:[''],
        id:[''],
        passcode:['']
      })
     }

     ngOnInit() { }
     onSubmit(): any {
       this.crudApi.add(this.mathForm.value).subscribe((res:any)=>{
         console.log('Data Added SuccesFully');
         this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
         this.ngZone.run(() => this.router.navigateByUrl('/teacherdashboard'))
         }, (err) => {
           console.log(err);
         });
       }
  }
