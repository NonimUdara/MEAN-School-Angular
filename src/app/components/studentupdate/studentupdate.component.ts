import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/Student-crudauth.service';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent implements OnInit {
  getId: any;
  updateForm: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private authservice: AuthService,
    private flashMessage: FlashMessagesService
    ) {
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.authservice.getStudent(this.getId).subscribe(res => {
        this.updateForm.setValue({
          name: res['name'],
          index: res['index'],
          stream: res['stream'],
          year: res['year'],
          email: res['email'],
          nic: res['nic'],
          
        })
      });
      this.updateForm = this.formBuilder.group({
        name: [''],
        index: [''],
        stream: [''],
        year: [''],
        email: [''],
        nic: [''],

      })
  }

  ngOnInit(): void { }
  onUpdate(){
    this.authservice.updateStudent(this.getId, this.updateForm.value).subscribe(res=>{
      console.log("Data Updated Success Full");
      this.flashMessage.show('Student Updated Successfully', {
        cssClass: 'alert-success',
        timeout: 5000});
      this.ngZone.run(()=>{this.router.navigateByUrl('/studentslist')})
    },(err)=>{
      console.log(err)
    })
  }

}
