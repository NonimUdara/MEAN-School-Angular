import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Meeting } from './meeting.service';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MathscrudService {

  REST_API:string = "http://localhost:3000/maths";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private httpClient:HttpClient) { }

  AddMaths(data:Meeting):Observable<any>{
    let API_URL = `${this.REST_API}/addmaths`;
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }

  getMaths(){
    return this.httpClient.get(`${this.REST_API}`);
  }

  getMath(id:any) :Observable<any>{
    let API_URL = `${this.REST_API}/readmaths/${id}`;
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
    )
  }

  updateMath(id:any , data:any):Observable<any>{
    let API_URL = `${this.REST_API}/updatemaths/${id}`;
    return this.httpClient.put(API_URL, data, {headers:this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

  deleteMath(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/deletemaths/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
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
