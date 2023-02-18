import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  faArrowLeft = faArrowLeft
  errorMessage!: string
  loginForm !: FormGroup
  submitted: boolean = false
  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router) { }

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


    this.adminService.login(data).subscribe({
      next: (response: any) => {
        if (response.status == true) {
          localStorage.setItem('adminToken', "" + response.token)
          this.router.navigate(['/admin/'])
        } else {
          this.errorMessage = response.message
          setTimeout(() => {
            this.errorMessage = ''
          }, 2000)
        }

      },
      error: (err) => {
        this.errorMessage = err
      }
    })
  }

}
