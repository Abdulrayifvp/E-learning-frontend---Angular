import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AdminService } from './admin.service';
import { InstructorService } from './instructor.service';
import { UserServices } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorIntercepterService implements HttpInterceptor {

  constructor(private adminService: AdminService, private router: Router, private instructorService: InstructorService, private userService: UserServices) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const role = req.url.split('/')[3]

    return next.handle(req).pipe(catchError(err => {
      if ([401, 403].includes(err.status)) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        if (role === 'admin') {
          this.adminService.logout();
          this.router.navigate(['/admin/login'])
        } else if (role === 'instructor') {
          this.instructorService.logout();
          this.router.navigate(['/instructor/login'])
        } else {
          this.userService.logout();
          this.router.navigate(['/login'])
        }
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
