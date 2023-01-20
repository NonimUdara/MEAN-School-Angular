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
    age: String | undefined;
    worked: String | undefined;
    subject: String | undefined;
    nic: String | undefined;
    email: String | undefined;
    username: String | undefined; 
    password: String | undefined; 
  
  }){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/teachers/register', teacher,{headers: headers})
    .pipe(map(response => response ));
    //.pipe(map((response: any) => response.json()));
  }

  authenticateTeacher(teacher: { 
    
    username: String | undefined;
    password: String | undefined;
    
  }){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/teachers/authenticate', teacher,{headers: headers})
    .pipe(map(response => response ));
    //.pipe(map((response: any) => response.json()));
  }

  getProfile(){
    //let headers = new HttpHeaders();
    this.loadToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    });

    console.log("headers :", headers);
    console.log("this.authToken :", this.authToken);
    
    return this.http.get('http://localhost:3000/teachers/profile', {headers: headers})
    .pipe(map(response => {
      console.log("response :", response); 
      return response;
    } ));
    //.pipe(map((response: any) => response.json()));
  }

  storeTeacherData(token2: any, teacher: any){
    localStorage.setItem('id_token', token2);
    localStorage.setItem('teacher', JSON.stringify(teacher));
    this.authToken = token2;
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
