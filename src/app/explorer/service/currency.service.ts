import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Currency} from "../state/currency";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  apiUrl: string = environment.apiMatchingEngine

  constructor(private http: HttpClient) { }

  public getAllCurrencies(): Observable<Currency[]> {
   return this.http.get<Currency[]>(`${this.apiUrl}/price/getCurrencies`)

  }
}
