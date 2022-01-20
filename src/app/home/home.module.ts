import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from "./component/login/login.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {NavsideComponent} from "../navside/component/navside/navside.component";
import {NavsideModule} from "../navside/navside.module";
import {AuthGuard} from "../guards/auth.guard";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  { path: 'eqlexchange', component: NavsideComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  exports: [
    HomeComponent,
    RouterModule,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NavsideModule,
    RouterModule.forRoot(routes),
    MatButtonModule
  ]
})
export class HomeModule { }
