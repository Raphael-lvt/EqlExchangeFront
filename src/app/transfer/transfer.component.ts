import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrencyService } from '../explorer/service/currency.service';
import { Currency } from '../explorer/state/currency';
import { PaymentService } from '../refill/service/payment.service';
import { ResultTransferDto } from 'src/app/transfer/state/resultTransferDto';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  constructor(private currencyService: CurrencyService, private paymentService: PaymentService,  private router: Router) {}

  public form!: FormGroup;
  currencies!: Currency[];
  isSuccess: boolean = false;
  isTransfertOk: boolean = false;
  resultMessage!: String;

  ngOnInit(): void {
    this.getCurrencies();
    this.form = new FormGroup({
      userEmail: new FormControl(sessionStorage.getItem('email')),
      currencyTicker: new FormControl(),
      walletAdresse: new FormControl(),
      amount: new FormControl()
    });
  }

  doTransfer(){
    this.paymentService.doTransfer(this.form.value).subscribe({
      error: (error: HttpErrorResponse) => {
        alert(error)      
    },
    next: (resultTransferDto: ResultTransferDto) => {
      this.isSuccess = true;
      if(resultTransferDto.transfertOk){
        this.isTransfertOk = true;
        this.resultMessage = 'Successfully !';
      setTimeout(()=>{
        this.router.navigate(['eqlexchange/wallet']);
      }, 1000);
      }else{
        this.resultMessage = resultTransferDto.message;
      }
    }
  }
  );
  }

  public getCurrencies(): void {
    this.currencyService.getAllCurrencies().subscribe({
        next: (response: Currency[]) => {
          this.currencies = response || [];
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      }
    );
  }

}
