import { Component, OnInit } from '@angular/core';
import { MathscrudService } from '../../services/mathscrud.service';

@Component({
  selector: 'app-mathscrud',
  templateUrl: './mathscrud.component.html',
  styleUrls: ['./mathscrud.component.css']
})
export class MathscrudComponent implements OnInit {

  Students:any =[];
  constructor(private crudApi:MathscrudService) { }

  ngOnInit(): void {
    this.crudApi.get().subscribe(res=>{
      console.log(res);
      this.Students = res;
    })
  }
  delete(id:any, i:any){
    console.log(id);
    if(window.confirm('Are you sure want to delete')){
      this.crudApi.delete(id).subscribe(res=>{
        this.Students.splice(i, 1);
      })
    }
  }

}
