import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserServices } from './user.service';
import { AdminService } from './admin.service';
import { InstructorService } from './instructor.service';
@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor {

  constructor(private userService: UserServices, private adminService: AdminService, private instructorService: InstructorService) { }

  intercept(req: any, next: any) {

    const role = req.url.split('/')[3]

    if (role === 'admin') {
      const token = this.adminService.getToken()

      const tokenizedReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      })
      return next.handle(tokenizedReq)

    } else if (role === 'instructor') {
      const token = this.instructorService.getToken()

      const tokenizedReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      })
      return next.handle(tokenizedReq)

    } else {
      const token = this.userService.getToken()

      const tokenizedReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      })
      return next.handle(tokenizedReq)
    }
  }
}
