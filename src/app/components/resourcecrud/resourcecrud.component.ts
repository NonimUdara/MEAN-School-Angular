import { Component, OnInit } from '@angular/core';
import { ResourcecrudService } from '../../services/resourcecrud.service';

@Component({
  selector: 'app-resourcecrud',
  templateUrl: './resourcecrud.component.html',
  styleUrls: ['./resourcecrud.component.css']
})
export class ResourcecrudComponent implements OnInit {

  Resources:any =[];
  constructor(private crudApi:ResourcecrudService) { }

  ngOnInit(): void {
    this.crudApi.get().subscribe(res=>{
      console.log(res);
      this.Resources = res;
    })
  }
  delete(id:any, i:any){
    console.log(id);
    if(window.confirm('Are you sure want to delete')){
      this.crudApi.delete(id).subscribe(res=>{
        this.Resources.splice(i, 1);
      })
    }
  }

}
