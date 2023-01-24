import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserServices } from '../services/user.service';

@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(private authService: UserServices, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }


}
