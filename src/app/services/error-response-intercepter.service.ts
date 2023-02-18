import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ErrorResponseIntercepterService implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
          this.router.navigate(['/404'])
        } else {
          // backend error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          this.router.navigate(['/404'])
        }
        // send error message to all errors passed from the backend
        console.error(errorMessage);
        return throwError(() => new Error('errorMessage'));
      })
    );
  }
}

