import { Component, OnInit } from '@angular/core';
import { MathscrudService } from '../../services/mathscrud.service';

@Component({
  selector: 'app-mathslist',
  templateUrl: './mathslist.component.html',
  styleUrls: ['./mathslist.component.css']
})
export class MathslistComponent implements OnInit {
  Meeting:any =[];
  constructor(private crudApi:MathscrudService) {}

  ngOnInit(): void {
    this.crudApi.get().subscribe(res=>{
      console.log(res);
      this.Meeting = res;
    })
  }

}
