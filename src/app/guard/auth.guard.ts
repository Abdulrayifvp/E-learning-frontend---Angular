import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServices } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: UserServices, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.loggIn()) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }


}
