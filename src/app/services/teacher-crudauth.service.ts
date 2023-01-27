import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  REST_API:string = "http://localhost:3000/teachers";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  authToken: any;
  teacher: any;

  constructor(private http:HttpClient) { }

  registerTeacher(teacher: { 

    name: String | undefined;
    gender: String | undefined;
    phone: String | undefined;
    worked: String | undefined;
    subject: String | undefined;
    nic: String | undefined;
    email: String | undefined;
    username: String | undefined; 
    password: String | undefined; 
  
  }){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.REST_API}/register`, teacher,{headers: headers})
    .pipe(map(response => response ));
  }

  authenticateTeacher(teacher: { 
    
    username: String | undefined;
    password: String | undefined;
    
  }){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.REST_API}/authenticate`, teacher,{headers: headers})
    .pipe(map(response => response ));
  }

  getProfile(){
    this.loadToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });

    console.log("headers :", headers);
    console.log("this.authToken :", this.authToken);
    
    return this.http.get(`${this.REST_API}/profile`, {headers: headers})
    .pipe(map(response => {
      console.log("response :", response); 
      return response;
    } ));
  }

  storeTeacherData(token: any, teacher: any){
    localStorage.setItem('id_token', token);
    localStorage.setItem('teacher', JSON.stringify(teacher));
    this.authToken = token;
    this.teacher = teacher;
  }

  getTeachers(){
    return this.http.get(`${this.REST_API}`);
  }

  getTeacher(id:any) :Observable<any>{
    let API_URL = `${this.REST_API}/read-teacher/${id}`;
    return this.http.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
    )
  }

  updateTeacher(id:any , data:any):Observable<any>{
    let API_URL = `${this.REST_API}/update-teacher/${id}`;
    return this.http.put(API_URL, data, {headers:this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

  deleteTeacher(id:any):Observable<any>{
    let API_URL = `${this.REST_API}/delete-teacher/${id}`;
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
    this.teacher = null;
    localStorage.clear();
  }

}
