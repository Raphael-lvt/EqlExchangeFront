import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TradeOrder} from "../state/trade-order";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TradeOrderService {

  private apiUrl = environment.apiMatchingEngine

  constructor(private http: HttpClient) { }

  public addTradeOrder(tradeOrder: TradeOrder): Observable<TradeOrder> {
    return this.http.post<TradeOrder>(`${this.apiUrl}/bookOrder/order`, tradeOrder);
  }
}
