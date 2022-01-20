import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WalletComponent} from "./component/wallet/wallet.component";
import {BrowserModule} from "@angular/platform-browser";
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    WalletComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        RouterModule
    ]
})
export class WalletModule { }
