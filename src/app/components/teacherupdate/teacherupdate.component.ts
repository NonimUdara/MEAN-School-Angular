import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/teacher-crudauth.service';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-teacherupdate',
  templateUrl: './teacherupdate.component.html',
  styleUrls: ['./teacherupdate.component.css']
})
export class TeacherupdateComponent implements OnInit {

  getId: any;
  updateForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private authservice: AuthService,
    private flashMessage: FlashMessagesService
    ) {
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.authservice.getTeacher(this.getId).subscribe(res => {
        this.updateForm.setValue({
          name: res['name'],
          gender: res['gender'],
          age: res['age'],
          worked: res['worked'],
          subject: res['subject'],
          nic: res['nic'],
          email: res['email'],
          username: res['username'],
          
        })
      });
      this.updateForm = this.formBuilder.group({
        name: [''],
        gender: [''],
        age: [''],
        worked: [''],
        subject: [''],
        nic: [''],
        email: [''],
        username: [''],

      })
  }

  ngOnInit(): void { }
    onUpdate(){
      this.authservice.updateTeacher(this.getId, this.updateForm.value).subscribe(res=>{
        console.log("Data Updated Success Full");
        this.flashMessage.show('Teacher Updated Successfully', {
          cssClass: 'alert-success',
          timeout: 5000});
        this.ngZone.run(()=>{this.router.navigateByUrl('/teacherslist')})
      },(err)=>{
        console.log(err)
      })
    }
}
