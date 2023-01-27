import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  REST_API:string = "http://localhost:3000/contactus";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  authToken: any;
  student: any;

  constructor(private http:HttpClient) { }

  contactusSend(contactus: { 
    name: String | undefined;
    email: String | undefined;
    message: String | undefined;
  }){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.REST_API}/add`, contactus,{headers: headers})
    .pipe(map(response => response ));
  }
  
}
