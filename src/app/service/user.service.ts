import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthenticateService} from "../home/service/authenticate.service";
import {User} from "../model/User";
import {catchError, Observable, throwError} from "rxjs";


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
    return this.http.get<User>(this.apiURL+`api/user?email=${this.userEmail}`, this.httpOptions);
  }

  errorHandler(error: any) {
    console.log(error);
  }
}
