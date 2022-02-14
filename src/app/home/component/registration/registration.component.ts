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
import {map, Observable, take} from "rxjs";

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
        validators: [Validators.email],
        asyncValidators: [this.controlExistEmail()]
      }),
      password: new FormControl(),
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

  public createUser() {
    console.log(this.form.value)
    this.userService.addUser(this.form.value).subscribe({
        error: (error: HttpErrorResponse) => {
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
