import {Component, Input} from '@angular/core';
import {AuthenticateService} from "./home/service/authenticate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {

  title = 'ExchangeApp';
  @Input() data$: boolean = false
  constructor(private authenticate: AuthenticateService) {
    this.authenticate.isAuthenticate().subscribe( (data) => {
      this.data$ = data
      console.log("helooooooooooooooooooooo" + data)
    });
  }

}
