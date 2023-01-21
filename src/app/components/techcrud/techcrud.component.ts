import { Component, OnInit } from '@angular/core';
import { TechcrudService } from '../../services/techcrud.service';

@Component({
  selector: 'app-techcrud',
  templateUrl: './techcrud.component.html',
  styleUrls: ['./techcrud.component.css']
})
export class TechcrudComponent implements OnInit {

  Meeting:any =[];
  constructor(private crudApi:TechcrudService) { }

  ngOnInit(): void {
    this.crudApi.get().subscribe(res=>{
      console.log(res);
      this.Meeting = res;
    })
  }
  delete(id:any, i:any){
    console.log(id);
    if(window.confirm('Are you sure want to delete')){
      this.crudApi.delete(id).subscribe(res=>{
        this.Meeting.splice(i, 1);
      })
    }
  }

}
