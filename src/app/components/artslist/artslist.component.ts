import { Component, OnInit } from '@angular/core';
import { ArtscrudService } from '../../services/artscrud.service';

@Component({
  selector: 'app-artslist',
  templateUrl: './artslist.component.html',
  styleUrls: ['./artslist.component.css']
})
export class ArtslistComponent implements OnInit {

  Meeting:any =[];
  constructor(private crudApi:ArtscrudService) {}

  ngOnInit(): void {
    this.crudApi.get().subscribe(res=>{
      console.log(res);
      this.Meeting = res;
    })
  }

}
