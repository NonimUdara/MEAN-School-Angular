import { Component, OnInit } from '@angular/core';
import { TechcrudService } from '../../services/techcrud.service';

@Component({
  selector: 'app-techlist',
  templateUrl: './techlist.component.html',
  styleUrls: ['./techlist.component.css']
})
export class TechlistComponent implements OnInit {

  Meeting:any =[];
  constructor(private crudApi:TechcrudService) {}

  ngOnInit(): void {
    this.crudApi.get().subscribe(res=>{
      console.log(res);
      this.Meeting = res;
    })
  }

}
