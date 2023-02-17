import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms'
import { Validators } from '@angular/forms'
import { GlobalConstants } from 'src/app/shared/global-constants';
import { Router } from '@angular/router';
import { UserServices } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  errorMessage: string = ''
  faArrowLeft = faArrowLeft
  registerForm!: FormGroup
  submitted: boolean = false
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserServices) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex), Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.pattern(GlobalConstants.phoneNumberRegex)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]]
    }, {
      validator: this.ConfirmPasswordValidator("password", "confirmPassword")
    })
  }

  onSubmit() {
    this.submitted = true
    if (this.registerForm.invalid) {
      return
    }
    const formData = this.registerForm.value
    const data = {
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      password: formData.password
    }
    this.userService.signup(data).subscribe({
      next: (response: object) => {
        localStorage.setItem('userToken', "" + response)
        this.router.navigate(['/'])

      }, error: (err) => {
        this.errorMessage = err
      }
    })

  }


  ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName]
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmPasswordValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}
