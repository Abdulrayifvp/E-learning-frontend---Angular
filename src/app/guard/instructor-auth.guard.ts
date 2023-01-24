import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { InstructorService } from '../services/instructor.service';

@Injectable({
  providedIn: 'root'
})
export class InstructorAuthGuard implements CanActivate {
  constructor(private authService: InstructorService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/instructor/login'])
      return false
    }
  }

}
