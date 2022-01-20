import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {TradeOrderService} from "./service/trade-order.service";
import {HttpErrorResponse} from "@angular/common/http";
import {OrderService} from "../transactions/service/order.service";
import {Order} from "../transactions/state/order";

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {

  displayedColumns: string[] = ['Date', 'Type', 'Pair', 'Amount', 'Limit', 'Status'];
  public isTransfer: boolean = false;
  public form!: FormGroup;
  public currencyId!: string;
  public orders!: Order[];
  public pair!: string;
  typeControl = new FormControl('BID');

  constructor(private route: ActivatedRoute, private tradeOrderService: TradeOrderService,
              private orderService: OrderService, private router: Router) {

  }

  ngOnInit(): void {
    this.isTransfer = false;
    this.currencyId = <string>this.route.snapshot.paramMap.get('id');
    this.pair = this.currencyId + '_EUR';
    this.getTradeOrders();
    this.form = new FormGroup({
      user: new FormControl(sessionStorage.getItem('email')),
      currencyPair: new FormControl(this.pair),
      orderType: this.typeControl,
      amount: new FormControl(),
      limitPrice: new FormControl()
    });
  }

  sendTradeOrder() {
    this.tradeOrderService.addTradeOrder(this.form.value).subscribe({
        next: () => {
          this.isTransfer = true;
        },
        error: (error: HttpErrorResponse) => {
          alert(error)
        },
        complete: () => this.getTradeOrders()
      }
    )
  }

  getTradeOrders() {
    this.orderService.getOrdersByPair(this.pair).subscribe({
      next: (response:Order[]) => {
        this.orders = response;
    },
      error: (error: HttpErrorResponse) => {
        alert(error);
      }
    });
  }

}
