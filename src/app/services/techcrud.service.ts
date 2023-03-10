import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TechcrudService {

  REST_API:string = "http://localhost:3000/technology";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  authToken: any;
  student: any;

  constructor(private http:HttpClient) { }

  add(tech: { 
    name: String | undefined;
    date: String | undefined;
    title: String | undefined;
    duration: String | undefined;
    link: String | undefined;
    id: String | undefined;
    passcode: String | undefined; 
  }){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.REST_API}/add`, tech,{headers: headers})
    .pipe(map(response => response ));
  }

  get(){
    return this.http.get(`${this.REST_API}`);
  }

  getMeeting(id:any) :Observable<any>{
    let API_URL = `${this.REST_API}/read/${id}`;
    return this.http.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
    )
  }

  update(id:any , data:any):Observable<any>{
    let API_URL = `${this.REST_API}/update/${id}`;
    return this.http.put(API_URL, data, {headers:this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

  delete(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/delete/${id}`;
    return this.http.delete(API_URL, { headers: this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
