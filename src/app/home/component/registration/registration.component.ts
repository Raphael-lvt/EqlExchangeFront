import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {UserService} from "../../../service/user.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    console.log(currentDay);
    this.minDate = new Date(currentYear - 90, currentMonth, currentDay);
    this.maxDate = new Date(currentYear - 18, currentMonth, currentDay);
  }

  minDate!: Date;
  maxDate!: Date;
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
        validators: [Validators.email],
        asyncValidators: [this.controlExistEmail()]
      }),
      password: new FormControl(''),
      confirmPassword: new FormControl('', {
        validators: [this.controlConfirmPassword()]
      }),
      dateOfBirth: new FormControl()
    });
  }

  public controlExistEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors| null> => {
      let email = control.value;
      return this.userService.checkExistEmail(email).pipe(
        map( res => {
          return res ? {existEmail: true} : null;
        })
      );
    }
  }

  private controlConfirmPassword(): ValidatorFn {
    return (control:AbstractControl): ValidationErrors | null => {
      let passWordToCheck = '';
      if(this.form != undefined) {
        passWordToCheck = this.form?.get('password')?.value;
      }
      let confirmPassword = control.value;
      return passWordToCheck === confirmPassword ? null : {notSame: true};
    }
  }

  public createUser() {
    console.log(this.form.value)
    this.userService.addUser(this.form.value).subscribe({
        error: (error: HttpErrorResponse) => {
          console.log(error);
        },
        complete: () => {
          this.isSuccess = true;
          setTimeout(() => {
            this.router.navigate(['']);
          }, 1000);
        }
      }
    );
  }

}
