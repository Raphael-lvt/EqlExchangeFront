import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/component/home/home.component";
import {NavsideComponent} from "./navside/component/navside/navside.component";
import {CommonModule} from "@angular/common";
import {NavsideModule} from "./navside/navside.module";
import {HomeModule} from "./home/home.module";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: 'eqlexchange', component: NavsideComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent},
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    NavsideModule,
    HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
