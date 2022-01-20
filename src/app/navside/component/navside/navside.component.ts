import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LogoutComponent} from "../logout/logout.component";

@Component({
  selector: 'dashboard',
  templateUrl: './navside.component.html',
  styleUrls: ['./navside.component.scss']
})
export class NavsideComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
