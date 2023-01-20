import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  REST_API:string = "http://localhost:3000/students";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  authToken: any;
  student: any;

  constructor(private http:HttpClient) { }

  registerStudent(student: { 
    name: String | undefined;
    index: String | undefined;
    stream: String | undefined;
    year: String | undefined;
    email: String | undefined;
    nic: String | undefined;
    password: String | undefined; 
  }){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/students/register', student,{headers: headers})
    .pipe(map(response => response ));
  }

  authenticateStudent(student: { index: String; password: String; }){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/students/authenticate', student,{headers: headers})
    .pipe(map(response => response ));
  }

  getProfile(){
    this.loadToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });
    return this.http.get('http://localhost:3000/students/profile', {headers: headers})
    .pipe(map(response => response ));
  }

  storeStudentData(token: any, student: any){
    localStorage.setItem('id_token', token);
    localStorage.setItem('student', JSON.stringify(student));
    this.authToken = token;
    this.student = student;
  }

  getStudents(){
    return this.http.get(`${this.REST_API}`);
  }

  getStudent(id:any) :Observable<any>{
    let API_URL = `${this.REST_API}/read-student/${id}`;
    return this.http.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
    )
  }

  updateStudent(id:any , data:any):Observable<any>{
    let API_URL = `${this.REST_API}/update-student/${id}`;
    return this.http.put(API_URL, data, {headers:this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

  deleteStudent(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/delete-student/${id}`;
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

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.student = null;
    localStorage.clear();
  }

}
