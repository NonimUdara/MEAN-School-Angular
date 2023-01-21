import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourcecrudService } from '../../services/resourcecrud.service';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-resourceupdate',
  templateUrl: './resourceupdate.component.html',
  styleUrls: ['./resourceupdate.component.css']
})
export class ResourceupdateComponent implements OnInit {

  getId: any;
  updateForm: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private authservice: ResourcecrudService,
    private flashMessage: FlashMessagesService
    ) {
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.authservice.getMeeting(this.getId).subscribe(res => {
        this.updateForm.setValue({
          name: res['name'],
          rname: res['rname'],
          subject: res['subject'],
          stream: res['stream'],
          author: res['author'],
          link: res['link'],         
        })
      });
      this.updateForm = this.formBuilder.group({
        name: [''],
        rname: [''],
        subject: [''],
        stream: [''],
        author: [''],
        link: [''],
      })
  }

  ngOnInit(): void { }
  onUpdate(){
    this.authservice.update(this.getId, this.updateForm.value).subscribe(res=>{
      console.log("Data Updated Success Full");
      this.flashMessage.show('Resources Updated Successfully', {
        cssClass: 'alert-success',
        timeout: 5000});
      this.ngZone.run(()=>{this.router.navigateByUrl('/resourcescrud')})
    },(err)=>{
      console.log(err)
    })
  }

}
