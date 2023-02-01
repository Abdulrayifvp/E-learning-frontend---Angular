import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHeaderComponent } from './components/user/user-header/user-header.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { InstructorRegisterComponent } from './components/instructor/instructor-register/instructor-register.component';
import { InstructorLoginComponent } from './components/instructor/instructor-login/instructor-login.component';
import { InstructorHomeComponent } from './components/instructor/instructor-home/instructor-home.component';
import { InstructorHeaderComponent } from './components/instructor/instructor-header/instructor-header.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserServices } from './services/user.service';
import { UserAuthGuard } from './guard/userAuth.guard';
import { TokenIntercepterService } from './services/token-intercepter.service';
import { InstructorCoursesComponent } from './components/instructor/instructor-courses/instructor-courses.component';
import { InstructorAddCourseComponent } from './components/instructor/instructor-add-course/instructor-add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHeaderComponent,
    UserHomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    InstructorRegisterComponent,
    InstructorLoginComponent,
    InstructorHomeComponent,
    InstructorHeaderComponent,
    AdminHeaderComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    InstructorCoursesComponent,
    InstructorAddCourseComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserServices, UserAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
