import { Component, OnInit } from '@angular/core';
import { ResourcecrudService } from '../../services/resourcecrud.service';

@Component({
  selector: 'app-resourceslist',
  templateUrl: './resourceslist.component.html',
  styleUrls: ['./resourceslist.component.css']
})
export class ResourceslistComponent implements OnInit {

  Resources:any =[];
  constructor(private crudApi:ResourcecrudService) {}

  ngOnInit(): void {
    this.crudApi.get().subscribe(res=>{
      console.log(res);
      this.Resources = res;
    })
  }

}
