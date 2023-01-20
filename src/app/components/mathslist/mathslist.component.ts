import { Component, OnInit } from '@angular/core';
import { MathscrudService } from '../../services/mathscrud.service';


@Component({
  selector: 'app-mathslist',
  templateUrl: './mathslist.component.html',
  styleUrls: ['./mathslist.component.css']
})
export class MathslistComponent implements OnInit {
  Maths:any =[];
  constructor(private crudApi:MathscrudService) {}

  ngOnInit(): void {
    this.crudApi.getMaths().subscribe(res=>{
      console.log(res);
      this.Maths = res;
    })
  }

}
