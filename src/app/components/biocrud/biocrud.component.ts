import { Component, OnInit } from '@angular/core';
import { BiocrudService } from '../../services/biocrud.service';

@Component({
  selector: 'app-biocrud',
  templateUrl: './biocrud.component.html',
  styleUrls: ['./biocrud.component.css']
})
export class BiocrudComponent implements OnInit {

  Meeting:any =[];
  constructor(private crudApi:BiocrudService) { }

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
