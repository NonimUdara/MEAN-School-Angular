import { Component, OnInit } from '@angular/core';
import { CommercecrudService } from '../../services/commercecrud.service';

@Component({
  selector: 'app-commercecrud',
  templateUrl: './commercecrud.component.html',
  styleUrls: ['./commercecrud.component.css']
})
export class CommercecrudComponent implements OnInit {

  Meeting:any =[];
  constructor(private crudApi:CommercecrudService) { }

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
