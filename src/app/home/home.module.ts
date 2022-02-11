import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from "./component/login/login.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {NavsideComponent} from "../navside/component/navside/navside.component";
import {NavsideModule} from "../navside/navside.module";
import {AuthGuard} from "../guards/auth.guard";
import {MatButtonModule} from "@angular/material/button";
import { RegistrationComponent } from './component/registration/registration.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

const routes: Routes = [
  { path: 'eqlexchange', component: NavsideComponent, canActivate: [AuthGuard] },
  { path: 'registration', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent
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
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class HomeModule { }
