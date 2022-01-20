import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticateService} from "../home/service/authenticate.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticateService: AuthenticateService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let what: boolean = false;
    this.authenticateService.isAuthenticate().subscribe((data) => { what = data})
    if (what) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }

}
