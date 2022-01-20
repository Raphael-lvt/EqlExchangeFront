import {Component, Directive, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {Currency} from "./state/currency";
import {CurrencyService} from "./service/currency.service";


const ELEMENT_DATA: {}[] = [
  {id: 1, name: 'Bitcoin', price: 1.0079, supply: '10000'},
  {id: 2, name: 'Ethereum', price: 30000, supply: '900000'},

];

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})


export class ExplorerComponent implements OnInit {

  displayedColumns: string[] = ['#', 'Crypto', 'Price', 'Supply', 'Actions'];
  currencies!: Currency[];

  constructor(private router: Router, private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.getAssets();
  }

  onSelect(element: any) {
    this.router.navigate(['eqlexchange/explorer/trade', element.ticker]);
  }

  public getAssets(): void {
    this.currencyService.getAllCurrencies().subscribe({
        next: (response: Currency[]) => {
          this.currencies = response || [];
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      }
    );
  }


}
