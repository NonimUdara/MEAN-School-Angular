import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateStudentRegister(student: { name: any; index: any; stream: any; phone: any; email: any; nic: any; password: any; }){
    if(student.name == undefined || student.index == undefined || student.stream == undefined || student.phone == undefined || student.email == undefined || student.nic == undefined || student.password == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateTeacherRegister(teacher: {  name: any; gender: any; age: any; worked: any; subject: any; nic: any; email: any; username: any;  password: any; }){
    if( teacher.name == undefined || teacher.gender == undefined || teacher.age == undefined || teacher.worked == undefined || teacher.subject == undefined || teacher.nic == undefined || teacher.email == undefined || teacher.username == undefined  || teacher.password == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateMeeting(meeting: {  name: any; date: any; title: any; duration: any; link: any; id: any; passcode: any}){
    if( meeting.name == undefined || meeting.date == undefined || meeting.title == undefined || meeting.duration == undefined || meeting.link == undefined || meeting.id == undefined || meeting.passcode == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateResources(resources: {  name: any; rname: any; subject: any; stream: any; author: any; link: any;}){
    if( resources.name == undefined || resources.rname == undefined || resources.subject == undefined || resources.stream == undefined || resources.author == undefined || resources.link == undefined){
      return false;
    } else {
      return true;
    }
  }


  validateEmail(email: any){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
  }
}
