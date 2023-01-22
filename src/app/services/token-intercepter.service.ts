import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserServices } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor {

  constructor(private authService: UserServices) { }

  intercept(req: any, next: any) {
    let authService = this.authService.getToken()

    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + authService
      }
    })
    return next.handle(tokenizedReq)
  }
}
