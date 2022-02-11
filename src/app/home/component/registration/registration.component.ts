import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  hide = true;
  isExistEmail: boolean = false;
  isSuccess: boolean = false;
  public form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      lastName: new FormControl(),
      firstName: new FormControl(),
      username: new FormControl(),
      email: new FormControl('', {
        validators: this.controleExistEmail()
      }),
      password: new FormControl(),
      dateOfBirth: new FormControl()
    });
  }

  private controleExistEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      this.verifyEmail(control.value);
      console.log(this.isExistEmail)
      if(this.isExistEmail === false) {
        return null;
      } else {
        return { existEmail : true}
      }
    }
  }

  public verifyEmail(email: string) {
    this.userService.checkExistEmail(email).subscribe({
        next: value => {
          if(value === true) {
            this.isExistEmail = true;
          } else {
            this.isExistEmail = false;
          }
        }
      }
    );
  }

  public createUser() {
    console.log(this.form.value)
    this.userService.addUser(this.form.value).subscribe({
        error: (error: HttpErrorResponse) => {
        },
        complete: () => {
          this.isSuccess = true;
          setTimeout(()=>{
            this.router.navigate(['']);
          }, 1000);
        }
      }
    );
  }

}
