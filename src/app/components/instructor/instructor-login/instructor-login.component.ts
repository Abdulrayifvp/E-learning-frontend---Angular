import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Validators } from '@angular/forms';
import { InstructorService } from 'src/app/services/instructor.service';
@Component({
  selector: 'app-instructor-login',
  templateUrl: './instructor-login.component.html',
  styleUrls: ['./instructor-login.component.css']
})
export class InstructorLoginComponent implements OnInit {
  faArrowLeft = faArrowLeft
  errorMessage: string = ''
  loginForm !: FormGroup
  submitted = false
  constructor(private formBuilder: FormBuilder, private instructorService: InstructorService, private router: Router) { }

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

    this.instructorService.login(data).subscribe({
      next: (response: any) => {
        if (response.status == true) {
          localStorage.setItem('instructorToken', "" + response.token)
          this.router.navigate(['/instructor/'])
        } else {
          this.errorMessage = response.message
          setTimeout(() => {
            this.errorMessage = ''
          }, 2000)
        }
      }
    })
  }

}
