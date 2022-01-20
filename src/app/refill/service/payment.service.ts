import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Payment} from "../state/payment";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import { TransferDto } from 'src/app/transfer/state/transferDto';
import { ResultTransferDto } from 'src/app/transfer/state/resultTransferDto';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl: string = environment.apiWalletUrl;

  constructor(private http: HttpClient) { }

  public sendPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(`${this.apiUrl}/sendPayment`, payment);
  }
  public doTransfer(transferDto: TransferDto): Observable<ResultTransferDto> {
    return this.http.post<ResultTransferDto>(`${this.apiUrl}/transfertCurrency`, transferDto);
  }
}
