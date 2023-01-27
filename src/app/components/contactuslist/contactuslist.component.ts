import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../../services/contactus.service';


@Component({
  selector: 'app-contactuslist',
  templateUrl: './contactuslist.component.html',
  styleUrls: ['./contactuslist.component.css']
})
export class ContactuslistComponent implements OnInit {

  Contactus:any =[];
  constructor(private crudApi:ContactusService) {}

  ngOnInit(): void {
    this.crudApi.get().subscribe(res=>{
      console.log(res);
      this.Contactus = res;
    })
  }

}
