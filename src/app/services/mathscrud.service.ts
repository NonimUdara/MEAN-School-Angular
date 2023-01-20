import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MathscrudService {

  REST_API:string = "http://localhost:3000/maths";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  authToken: any;
  student: any;

  constructor(private http:HttpClient) { }

  add(bio: { 
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
    return this.http.post('http://localhost:3000/maths/add', bio,{headers: headers})
    .pipe(map(response => response ));
  }

  // authenticateStudent(student: { index: String; password: String; }){
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('http://localhost:3000/students/authenticate', student,{headers: headers})
  //   .pipe(map(response => response ));
  // }

  // getProfile(){
  //   this.loadToken();
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': this.authToken
  //   });
  //   return this.http.get('http://localhost:3000/students/profile', {headers: headers})
  //   .pipe(map(response => response ));
  // }

  // storeStudentData(token: any, student: any){
  //   localStorage.setItem('id_token', token);
  //   localStorage.setItem('student', JSON.stringify(student));
  //   this.authToken = token;
  //   this.student = student;
  // }

  get(){
    return this.http.get(`${this.REST_API}`);
  }

  getStudent(id:any) :Observable<any>{
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

  // loadToken(){
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  // }

  // logout(){
  //   this.authToken = null;
  //   this.student = null;
  //   localStorage.clear();
  // }

}
