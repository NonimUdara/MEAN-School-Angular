import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtscrudService } from '../../services/artscrud.service';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-artsupdate',
  templateUrl: './artsupdate.component.html',
  styleUrls: ['./artsupdate.component.css']
})
export class ArtsupdateComponent implements OnInit {

  getId: any;
  updateForm: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private authservice: ArtscrudService,
    private flashMessage: FlashMessagesService
    ) {
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.authservice.getMeeting(this.getId).subscribe(res => {
        this.updateForm.setValue({
          name: res['name'],
          date: res['date'],
          title: res['title'],
          duration: res['duration'],
          link: res['link'],
          id: res['id'],
          passcode: res['passcode'],
          
        })
      });
      this.updateForm = this.formBuilder.group({
        name: [''],
        date: [''],
        title: [''],
        duration: [''],
        link: [''],
        id: [''],
        passcode: [''],

      })
  }

  ngOnInit(): void { }
  onUpdate(){
    this.authservice.update(this.getId, this.updateForm.value).subscribe(res=>{
      console.log("Data Updated Success Full");
      this.flashMessage.show('Meeting Updated Successfully', {
        cssClass: 'alert-success',
        timeout: 5000});
      this.ngZone.run(()=>{this.router.navigateByUrl('/artscrud')})
    },(err)=>{
      console.log(err)
    })
  }

}
