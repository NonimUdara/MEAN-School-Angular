import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/teacher-crudauth.service';

@Component({
  selector: 'app-teacherslist',
  templateUrl: './teacherslist.component.html',
  styleUrls: ['./teacherslist.component.css']
})
export class TeacherslistComponent implements OnInit {
  Teachers:any =[];
  constructor(private crudApi:AuthService) {}

  ngOnInit(): void {
    this.crudApi.getTeachers().subscribe(res=>{
      console.log(res);
      this.Teachers = res;
    })
  }
  delete(id:any, i:any){
    console.log(id);
    if(window.confirm('Are you sure want to delete')){
      this.crudApi.deleteTeacher(id).subscribe(res=>{
        this.Teachers.splice(i, 1);
      })
    }
  }
}
