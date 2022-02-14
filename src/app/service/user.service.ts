import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../model/User";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userEmail: any = sessionStorage.getItem('email');
  apiURL: string = environment.backEnd;
  httpOptions = {
    headers: new HttpHeaders( {'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('authToken')
    })
  };

  constructor(private http: HttpClient) { }

  public getCurrentUser(): Observable<User> {
    return this.http.get<User>(this.apiURL+`/api/user?email=${this.userEmail}`, this.httpOptions);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiURL}/api/newUser`, user);
  }

  public checkExistEmail(email: string): Observable<any> {
    return this.http.get(this.apiURL+`/api/exist?email=${email}`);
  }

  errorHandler(error: any) {
    console.log(error);
  }
}
