import { Component, OnInit } from '@angular/core';
import { ArtscrudService } from '../../services/artscrud.service';

@Component({
  selector: 'app-artscrud',
  templateUrl: './artscrud.component.html',
  styleUrls: ['./artscrud.component.css']
})
export class ArtscrudComponent implements OnInit {

  Meeting:any =[];
  constructor(private crudApi:ArtscrudService) { }

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
