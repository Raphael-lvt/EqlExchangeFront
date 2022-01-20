import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Login} from "../../model/login";
import {LoginResponse} from "../../model/LogResponse";
import {AuthenticateService} from "../../service/authenticate.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login("","");
  err:number = 0;
  message :string | undefined ;

  constructor(private authService: AuthenticateService, private router:Router, private modalService: NgbModal) {}

  ngOnInit(): void {

  }

  doLogin() {
    console.log(this.login.email);
    this.authService.authenticate(this.login).subscribe({
      next: (loginResp : LoginResponse)=>{
        console.log(loginResp);
        this.message = loginResp.message;
        this.modalService.dismissAll();
      },
      error: (err) => { console.log("error:"+err); this.message = "erreur appel WS login";}
    });
  }
}

