import { Component, OnInit } from '@angular/core';
import { BiocrudService } from '../../services/biocrud.service';

@Component({
  selector: 'app-biolist',
  templateUrl: './biolist.component.html',
  styleUrls: ['./biolist.component.css']
})
export class BiolistComponent implements  OnInit {

  Meeting:any =[];
  constructor(private crudApi:BiocrudService) {}

  ngOnInit(): void {
    this.crudApi.get().subscribe(res=>{
      console.log(res);
      this.Meeting = res;
    })
  }

}
