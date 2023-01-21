import { Component,  OnInit } from '@angular/core';
import { CommercecrudService } from '../../services/commercecrud.service';

@Component({
  selector: 'app-commercelist',
  templateUrl: './commercelist.component.html',
  styleUrls: ['./commercelist.component.css']
})
export class CommercelistComponent implements OnInit {

  Meeting:any =[];
  constructor(private crudApi:CommercecrudService) {}

  ngOnInit(): void {
    this.crudApi.get().subscribe(res=>{
      console.log(res);
      this.Meeting = res;
    })
  }

}
