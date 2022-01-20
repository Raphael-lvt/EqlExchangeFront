import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Order} from "../state/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl: string = environment.apiMatchingEngine;

  constructor(private http: HttpClient) { }

  public getCurrentUserOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(
      `${this.apiUrl}/bookOrder/myOrders?user=${sessionStorage.getItem('email')}`
    );
  }

  public getOrdersByPair(pair: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/bookOrder/Orders?pair=${pair}`);
  }

  public getLastUserOrder(): Observable<Order> {
    return this.http.get<Order>(
      `${this.apiUrl}/bookOrder/lastOrder?user=${sessionStorage.getItem('email')}`);
  }

}
