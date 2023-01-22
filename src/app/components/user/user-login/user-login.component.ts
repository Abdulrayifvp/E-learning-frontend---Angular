import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Validators } from '@angular/forms';
import { UserServices } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  faArrowLeft = faArrowLeft
  errorMessage: string = ''
  loginForm !: FormGroup
  submitted = false
  constructor(private formBuilder: FormBuilder, private userService: UserServices, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    })
  }

  onSubmit() {
    this.submitted = true
    if (this.loginForm.invalid) {
      return
    }
    const formData = this.loginForm.value
    const data = {
      email: formData.email,
      password: formData.password
    }

    this.userService.login(data).subscribe((response: any) => {
      localStorage.setItem('token', "" + response)
      this.router.navigate(['/'])

    }, (err) => {
      this.errorMessage = err.error
    })
  }
}
