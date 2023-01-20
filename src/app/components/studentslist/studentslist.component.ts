import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../services/Student-crudauth.service';


@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {
  Students:any =[];
  constructor(private crudApi:AuthService) { }

  ngOnInit(): void {
    this.crudApi.getStudents().subscribe(res=>{
      console.log(res);
      this.Students = res;
    })
  }
  delete(id:any, i:any){
    console.log(id);
    if(window.confirm('Are you sure want to delete')){
      this.crudApi.deleteStudent(id).subscribe(res=>{
        this.Students.splice(i, 1);
      })
    }
  }
}
